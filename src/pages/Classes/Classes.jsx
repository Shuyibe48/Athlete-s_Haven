import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider"
import { getAllClass, saveClass } from "../../api/class";
import { getASingleUser } from "../../api/auth";


const Classes = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState('')

    const approvedClasses = classes.filter(classItem => classItem.status === 'approved')

    useEffect(() => {
        getAllClass()
            .then(data => setClasses(data))
    }, [])

    useEffect(() => {
        getASingleUser(user?.email)
            .then(data => setCurrentUser(data.role))
    }, [user])


    const selectClass = (image, name, host, sets, price, selectStudent) => {
        const info = {
            image,
            name, 
            host,
            sets,
            price,
            selectStudent
        }
        saveClass(info)
        .then(data => {
            console.log(data)
            window.alert('successfully added a class!')
        })
    }



    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {approvedClasses.map(classItem => (
                    <div
                        key={classItem._id}
                        className={`bg-gray-100 p-4 md:p-8 ${classItem.availableSeats === '0' ? 'bg-red-200' : ''
                            }`}
                    >
                        <img src={classItem.image} alt="Class" className="w-full h-auto mb-4" />
                        <h2 className="text-xl md:text-2xl font-bold mb-2">{classItem.className}</h2>
                        <p className="text-lg">Instructor: {classItem.host.name}</p>
                        <p className="text-lg">Available Seats: {classItem.availableSeats}</p>
                        <p className="text-lg">Price: ${classItem.price}</p>
                        {currentUser === 'instructor' || currentUser === 'admin' ? (
                            <button
                                onClick={() => selectClass(classItem.image, classItem.className, classItem.host.name, classItem.availableSeats, classItem.price)}
                                disabled
                                className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md inline-block mt-4 cursor-not-allowed"
                            >
                                Select
                            </button>
                        ) : (
                            <button
                                onClick={() => selectClass(classItem.image, classItem.className, classItem.host.name, classItem.availableSeats, classItem.price, user?.email)}
                                disabled={classItem.availableSeats === '0'}
                                className="bg-gray-800 text-white py-2 px-4 rounded-md inline-block mt-4"
                            >
                                Select
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Classes;

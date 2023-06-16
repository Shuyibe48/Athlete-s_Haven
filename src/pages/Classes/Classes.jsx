import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider"
import { getAllClass } from "../../api/class";


const Classes = ({ isAdmin }) => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getAllClass()
            .then(data => setClasses(data))
    }, [])

    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {classes.map(classItem => (
                    <div
                        key={classItem._id}
                        className={`bg-gray-100 p-4 md:p-8 ${classItem.availableSeats === 0 ? 'bg-red-200' : ''
                            }`}
                    >
                        <img src={classItem.image} alt="Class" className="w-full h-auto mb-4" />
                        <h2 className="text-xl md:text-2xl font-bold mb-2">{classItem.className}</h2>
                        <p className="text-lg">Instructor: {classItem.host.name}</p>
                        <p className="text-lg">Available Seats: {classItem.availableSeats}</p>
                        <p className="text-lg">Price: ${classItem.price}</p>
                        {!user || isAdmin || classItem.availableSeats === 0 ? (
                            <button
                                disabled
                                className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md inline-block mt-4 cursor-not-allowed"
                            >
                                Select
                            </button>
                        ) : (
                            <button
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

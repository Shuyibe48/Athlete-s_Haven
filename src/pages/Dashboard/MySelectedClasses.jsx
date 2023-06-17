import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { deleteSelectClass, getAllSelectedClass } from "../../api/class"

const MySelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getAllSelectedClass(user?.email)
            .then(data => setSelectedClasses(data))
    }, [user, selectedClasses])


    const onDeleteClick = id => {
        deleteSelectClass(id)
            .then(data => {
                console.log(data)
                window.alert('deleted')
            })
    }


    return (
        <div className="flex flex-col space-y-8 p-8">
            <h2 className="text-4xl font-bold text-center mb-8">My Selected Classes</h2>
            {selectedClasses.map((course) => (
                <div key={course._id} className="flex gap-4 flex-col md:flex-row items-center md:justify-between bg-gray-100 p-4 md:p-8">
                    <div className="md:w-1/4">
                        <img src={course.image} alt="Class" className="max-w-full h-auto" />
                    </div>
                    <div className="md:w-3/4 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold">{course.name}</h2>
                        <p className="text-lg">Instructor: {course.host}</p>
                        <p className="text-lg">Seats: {course.sets}</p>
                        <p className="text-lg">Price: ${course.price}</p>
                        <button
                            className="bg-gray-800 text-white py-2 px-4 rounded-md inline-block mt-4 mr-4"
                            onClick={() => onDeleteClick(course._id)}
                        >
                            Delete
                        </button>
                        {/* <Link to='/dashboard/payment'> */}
                            <button
                                className="bg-blue-900 text-white py-2 px-4 rounded-md inline-block mt-4"
                            >
                                Pay
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MySelectedClasses;

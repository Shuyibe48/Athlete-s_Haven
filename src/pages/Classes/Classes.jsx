import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const classes = [
    {
        id: 1,
        name: 'Class A',
        instructor: 'John Doe',
        availableSeats: 0,
        price: 50,
        image: 'https://plus.unsplash.com/premium_photo-1685055940230-9cbfa31fd4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        id: 2,
        name: 'Class B',
        instructor: 'Jane Smith',
        availableSeats: 5,
        price: 70,
        image: 'https://images.unsplash.com/photo-1570189046794-606e8291541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
    },
];

const Classes = ({ isAdmin }) => {
    const { user } = useContext(AuthContext)

    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {classes.map((course) => (
                    <div
                        key={course.id}
                        className={`bg-gray-100 p-4 md:p-8 ${course.availableSeats === 0 ? 'bg-red-200' : ''
                            }`}
                    >
                        <img src={course.image} alt="Class" className="w-full h-auto mb-4" />
                        <h2 className="text-xl md:text-2xl font-bold mb-2">{course.name}</h2>
                        <p className="text-lg">Instructor: {course.instructor}</p>
                        <p className="text-lg">Available Seats: {course.availableSeats}</p>
                        <p className="text-lg">Price: ${course.price}</p>
                        {!user || isAdmin || course.availableSeats === 0 ? (
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

const selectedClasses = [
    {
        id: 1,
        name: 'Class A',
        instructor: 'John Doe',
        seats: 10,
        price: 50,
        image: 'https://images.unsplash.com/photo-1610736342603-4b3620157ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        id: 2,
        name: 'Class B',
        instructor: 'Jane Smith',
        seats: 5,
        price: 70,
        image: 'https://images.unsplash.com/photo-1544333323-ec9ed3218dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=832&q=80',
    },
];

const MySelectedClasses = ({ onDeleteClick, onPayClick }) => {
    return (
        <div className="flex flex-col space-y-8 p-8">
            <h2 className="text-4xl font-bold text-center mb-8">My Selected Classes</h2>
            {selectedClasses.map((course) => (
                <div key={course.id} className="flex gap-4 flex-col md:flex-row items-center md:justify-between bg-gray-100 p-4 md:p-8">
                    <div className="md:w-1/4">
                        <img src={course.image} alt="Class" className="max-w-full h-auto" />
                    </div>
                    <div className="md:w-3/4 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold">{course.name}</h2>
                        <p className="text-lg">Instructor: {course.instructor}</p>
                        <p className="text-lg">Seats: {course.seats}</p>
                        <p className="text-lg">Price: ${course.price}</p>
                        <button
                            className="bg-gray-800 text-white py-2 px-4 rounded-md inline-block mt-4 mr-4"
                            onClick={() => onDeleteClick(course.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-blue-900 text-white py-2 px-4 rounded-md inline-block mt-4"
                            onClick={() => onPayClick(course.id)}
                        >
                            Pay
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MySelectedClasses;

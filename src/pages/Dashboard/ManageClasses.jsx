const ManageClasses = () => {
    const classes = [
        {
            id: 1,
            className: 'Class A',
            classImage: 'https://images.unsplash.com/photo-1544333323-ec9ed3218dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=832&q=80',
            instructorName: 'John Doe',
            instructorEmail: 'johndoe@example.com',
            availableSeats: 20,
            price: 99,
            status: 'pending',
        },
        {
            id: 2,
            className: 'Class B',
            classImage: 'https://plus.unsplash.com/premium_photo-1685055940272-62cce291d7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            instructorName: 'Jane Smith',
            instructorEmail: 'janesmith@example.com',
            availableSeats: 15,
            price: 149,
            status: 'approved',
        },
        {
            id: 3,
            className: 'Class C',
            classImage: 'https://images.unsplash.com/photo-1543503430-9bb747e6b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            instructorName: 'Michael Johnson',
            instructorEmail: 'michaeljohnson@example.com',
            availableSeats: 10,
            price: 199,
            status: 'denied',
        },
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Manage Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((classItem) => (
                    <div
                        key={classItem.id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <img
                                src={classItem.classImage}
                                alt={classItem.className}
                                className="w-full h-auto rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{classItem.className}</h3>
                            <p>Instructor: {classItem.instructorName}</p>
                            <p>Email: {classItem.instructorEmail}</p>
                            <p>Available Seats: {classItem.availableSeats}</p>
                            <p>Price: ${classItem.price}</p>
                            <p>Status: {classItem.status}</p>
                        </div>
                        <div className="mt-4">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                disabled={classItem.status === 'approved'}
                            >
                                Approve
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                disabled={classItem.status === 'approved'}
                            >
                                Deny
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                Send Feedback
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageClasses;

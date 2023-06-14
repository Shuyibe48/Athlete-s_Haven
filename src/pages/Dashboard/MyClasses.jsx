const MyClasses = () => {
    const classes = [
        {
            id: 1,
            className: 'Class A',
            status: 'approved',
            totalStudents: 20,
            feedback: 'Great class!',
        },
        {
            id: 2,
            className: 'Class B',
            status: 'pending',
            totalStudents: 15,
            feedback: 'Needs improvement.',
        },
        {
            id: 3,
            className: 'Class C',
            status: 'denied',
            totalStudents: 10,
            feedback: 'Not suitable for the target audience.',
        },
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">My Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((classItem) => (
                    <div
                        key={classItem.id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{classItem.className}</h3>
                            <p className="mb-4">Status: {classItem.status}</p>
                            <p>Total Enrolled Students: {classItem.totalStudents}</p>
                            <p>Feedback: {classItem.feedback}</p>
                        </div>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClasses;

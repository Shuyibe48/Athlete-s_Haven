import { Link } from 'react-router-dom';
const instructors = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        classesTaken: 5,
        classNames: ['Class A', 'Class B', 'Class C'],
        image: 'https://images.unsplash.com/photo-1631490238088-9e9dd50041a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        classesTaken: 3,
        classNames: ['Class D', 'Class E'],
        image: 'https://images.unsplash.com/photo-1521572244140-1eb2ab966e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
];

const Instructors = () => {
    return (
        <div className="flex flex-col space-y-8 p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Instructors</h2>
            {instructors.map((instructor) => (
                <div
                    key={instructor.id}
                    className="flex gap-4 flex-col md:flex-row items-center md:justify-between bg-gray-100 p-4 md:p-8"
                >
                    <div className="md:w-1/4">
                        <img src={instructor.image} alt="Instructor" className="max-w-full h-auto rounded-full" />
                    </div>
                    <div className="md:w-3/4 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold">{instructor.name}</h2>
                        <p className="text-lg">{instructor.email}</p>
                        {instructor.classesTaken && (
                            <p className="text-lg">
                                Number of Classes Taken: {instructor.classesTaken}
                            </p>
                        )}
                        {instructor.classNames && (
                            <p className="text-lg">
                                Classes Taken: {instructor.classNames.join(', ')}
                            </p>
                        )}
                        <Link
                            to={`/instructors/${instructor.id}`}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block mt-4"
                        >
                            See Classes
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Instructors;

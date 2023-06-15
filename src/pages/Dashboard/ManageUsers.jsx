import { useEffect, useState } from 'react';
import { getUser } from '../../api/auth';

const ManageUsers = () => {
    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         name: 'John Doe',
    //         email: 'johndoe@example.com',
    //         role: 'student',
    //         picture: 'john-doe.jpg',
    //     },
    //     {
    //         id: 2,
    //         name: 'Jane Smith',
    //         email: 'janesmith@example.com',
    //         role: 'student',
    //         picture: 'jane-smith.jpg',
    //     },
    //     {
    //         id: 3,
    //         name: 'Michael Johnson',
    //         email: 'michaeljohnson@example.com',
    //         role: 'student',
    //         picture: 'michael-johnson.jpg',
    //     },
    // ]);

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUser()
        .then(data => setUsers(data))
    }, [])

    const makeInstructor = (userId) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, role: 'instructor' } : user
            )
        );
    };

    const makeAdmin = (userId) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, role: 'admin' } : user
            )
        );
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Manage Users</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <img
                                src={user.picture}
                                alt={user.name}
                                className="w-full h-auto rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Role: {user.role}</p>
                        </div>
                        <div className="mt-4">
                            {user.role === 'student' && (
                                <>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                        onClick={() => makeInstructor(user.id)}
                                    >
                                        Make Instructor
                                    </button>
                                    <button
                                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                                        onClick={() => makeAdmin(user.id)}
                                    >
                                        Make Admin
                                    </button>
                                </>
                            )}
                            {user.role !== 'student' && (
                                <p className="text-gray-500">Already assigned</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;
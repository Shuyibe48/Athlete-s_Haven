import { useEffect, useState } from 'react';
import { getUser, makeAdmin, makeInstructor } from '../../api/auth';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    const [disableIns, setDisableIns] = useState(false)
    const [disableAdm, setDisableAdm] = useState(false)

    useEffect(() => {
        getUser()
            .then(data => setUsers(data))
    }, [users])

    const instructorButton = (email, isIns) => {
        setDisableIns(true)
        makeInstructor(email, isIns)
    };

    const adminButton = (email, isAdm) => {
        setDisableAdm(true)
        makeAdmin(email, isAdm)
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
                            <>
                                <button
                                    disabled={disableIns === true || user.isIns}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                    onClick={() => instructorButton(user.email, true)}
                                >
                                    Make Instructor
                                </button>
                                <button
                                    disabled={disableAdm === true || user.isAdm}
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                                    onClick={() => adminButton(user.email, true)}
                                >
                                    Make Admin
                                </button>
                            </>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;
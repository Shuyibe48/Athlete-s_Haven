import Swal from 'sweetalert2';
import useAxiosSecure from '../../api/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], isLoading, refetch, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/users`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message
    console.log(users);


    const actions = (id, role) => {
        const info = {
            id,
            role
        }

        axiosSecure.patch(`/users/${id}`, info)
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Done!',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            })
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">SL No</th>
                            <th className="px-4 py-2">User Image</th>
                            <th className="px-4 py-2">User Name</th>
                            <th className="px-4 py-2">User Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={user._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">
                                    <img
                                        src={user.picture}
                                        alt={user.name}
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                </td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 2
                                            ? "bg-green-100 text-green-800"
                                            : user.status === 3
                                                ? "bg-red-100 text-red-800"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {user.role === 1 &&
                                            'Student'
                                        }
                                        {user.role === 2 &&
                                            'Instructor'
                                        }
                                        {user.role === 3 &&
                                            'Admin'
                                        }
                                    </span>
                                </td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button disabled={user.role === 2} onClick={() => actions(user._id, 2)} className="bg-green-500 text-sm hover:bg-green-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Make Instructor
                                    </button>
                                    <button disabled={user.role === 3} onClick={() => actions(user._id, 3)} className="bg-gray-500 text-sm hover:bg-gray-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Make Admin
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
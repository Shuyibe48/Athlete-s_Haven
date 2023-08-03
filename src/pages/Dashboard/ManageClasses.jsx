import Swal from "sweetalert2";
import useAxiosSecure from "../../api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
    const axiosSecure = useAxiosSecure()

    const { data: classes = [], isLoading, refetch, error } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/class`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message
    console.log(classes);


    const actions = (id, status) => {
        const info = {
            id,
            status
        }

        axiosSecure.patch(`/class/${id}`, info)
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
                            <th className="px-4 py-2">Class Image</th>
                            <th className="px-4 py-2">Class Name</th>
                            <th className="px-4 py-2">Instructor Name</th>
                            <th className="px-4 py-2">Instructor Email</th>
                            <th className="px-4 py-2">Available Seats</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">
                                    <img
                                        src={classItem.image}
                                        alt={classItem.className}
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                </td>
                                <td className="border px-4 py-2">{classItem.className}</td>
                                <td className="border px-4 py-2">{classItem.instructorName}</td>
                                <td className="border px-4 py-2">{classItem.instructorEmail}</td>
                                <td className="border px-4 py-2">{classItem.availableSeats}</td>
                                <td className="border px-4 py-2">${classItem.price}</td>
                                <td className="border px-4 py-2">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${classItem.status === 2
                                            ? "bg-green-100 text-green-800"
                                            : classItem.status === 3
                                                ? "bg-red-100 text-red-800"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`}
                                    >
                                        {classItem.status === 1 &&
                                            'Pending'
                                        }
                                        {classItem.status === 2 &&
                                            'Approved'
                                        }
                                        {classItem.status === 3 &&
                                            'Deny'
                                        }
                                    </span>
                                </td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button disabled={classItem.status === 2} onClick={() => actions(classItem._id, 2)} className="bg-green-500 text-sm hover:bg-green-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Approved
                                    </button>
                                    <button disabled={classItem.status === 3} onClick={() => actions(classItem._id, 3)} className="bg-red-500 text-sm hover:bg-red-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Deny
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

export default ManageClasses;

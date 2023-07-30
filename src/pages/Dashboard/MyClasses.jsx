import useAxiosSecure from "../../api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: classes = [], isLoading, refetch, error } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/class/${user?.email}`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message
    console.log(classes);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <h2 className="text-3xl font-semibold mb-6">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">SL No</th>
                            <th className="px-4 py-2">Class Name</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Total Enrolled</th>
                            <th className="px-4 py-2">Feedback</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes?.map((classItem, idx) => (
                            <tr key={classItem._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{idx + 1}</td>
                                <td className="px-4 py-2">{classItem.className}</td>
                                {classItem.status === 1 &&
                                    <td className="px-4 py-2">Pending</td>
                                }
                                {classItem.status === 2 &&
                                    <td className="px-4 py-2">Approved</td>
                                }
                                {classItem.status === 3 &&
                                    <td className="px-4 py-2">Deny</td>
                                }
                                <td className="px-4 py-2">{classItem.totalEnrolled}</td>
                                <td className="px-4 py-2">{classItem.feedback}</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded">
                                        Update
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

export default MyClasses;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { deleteSelectClass } from "../../api/class"
import useAxiosSecure from "../../api/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const MySelectedClasses = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    // useEffect(() => {

    // }, [user, axiosSecure])

    const { data: selectedClasses = [], isLoading, refetch, error } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/cart/${user?.email}`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message
    // console.log(selectedClasses);


    const pay = (id, _id, className, price) => {
        axiosSecure.get(`/cart-class/${id}`)
            .then(data => {
                const totalEnrolled = data?.data?.totalEnrolled + 1
                const availableSeats = data?.data?.availableSeats - 1

                const info = {
                    totalEnrolled,
                    availableSeats
                }

                axiosSecure.patch(`/cart-class/${id}`, info)
                    .then(data => {
                        console.log(data)

                        axiosSecure.post(`/enrolled`, {className, price, email: user?.email, status: 'Paid'})
                        .then(data => console.log(data?.data))


                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Enrolled!!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        actions(_id)
                        refetch()
                    })
            })
    }


    const actions = (id) => {
        axiosSecure.delete(`/cart/${id}`)
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deleted!',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            })
    }


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Selected Classes</h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">SL No</th>
                            <th className="px-4 py-2">Class Image</th>
                            <th className="px-4 py-2">Class Name</th>
                            <th className="px-4 py-2">Instructor Name</th>
                            <th className="px-4 py-2">Available Seats</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses?.map((classItem, index) => (
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
                                <td className="border px-4 py-2">{classItem.availableSeats}</td>
                                <td className="border px-4 py-2">${classItem.price}</td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button onClick={() => pay(classItem.id, classItem._id, classItem.className, classItem.price)} className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Pay
                                    </button>
                                    <button onClick={() => actions(classItem._id)} className="bg-red-500 text-sm hover:bg-red-700 text-white font-semibold py-2 my-2 lg:my-0 px-2 rounded">
                                        Delete
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

export default MySelectedClasses;

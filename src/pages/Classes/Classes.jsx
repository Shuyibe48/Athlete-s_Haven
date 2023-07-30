// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider"
import { useEffect } from "react";
import useAxiosSecure from "../../api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Classes = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    // console.log(currentUser?.role);

    useEffect(() => {
        axiosSecure.get(`/users/${user?.email}`)
            .then(data => setCurrentUser(data?.data))
    }, [user, axiosSecure])



    const { data: classes = [], isLoading, refetch, error } = useQuery({
        queryKey: ['approved'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/approved`)
            // console.log({ fromTQ: data })
            return data?.data
        },
    })
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred' + error.message
    // console.log(classes);

    const selectClass = (selectedClass, currentUser) => {
        if (!currentUser) {
            Swal.fire({
                title: 'Error!',
                text: 'Log in before selecting the course',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            return
        }


        const id = selectedClass._id
        delete selectedClass._id

        const newObject = {
            ...selectedClass,
            id: id,
            studentEmail: user?.email
        }

        console.log(newObject)

        axiosSecure.post('/cart', newObject)
            .then(data => {
                console.log(data?.data)
                Swal.fire({
                    title: 'success',
                    text: 'Selected!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {classes?.map(classItem => (
                    <div
                        key={classItem._id}
                        className={`bg-gray-100 p-4 md:p-8 ${classItem.availableSeats === 0 ? 'bg-red-200' : ''
                            }`}
                    >
                        <img src={classItem.image} alt="Class" className="w-full h-auto mb-4" />
                        <h2 className="text-xl md:text-2xl font-bold mb-2">{classItem.className}</h2>
                        <p className="text-lg">Instructor: {classItem.instructorName}</p>
                        <p className="text-lg">Available Seats: {classItem.availableSeats}</p>
                        <p className="text-lg">Price: ${classItem.price}</p>
                        {currentUser?.role !== 1 ? (
                            <button
                                disabled
                                className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md inline-block mt-4 cursor-not-allowed"
                            >
                                Select
                            </button>
                        ) : (
                            <button
                                onClick={() => selectClass(classItem, currentUser)}
                                disabled={classItem.availableSeats === 0}
                                className="bg-gray-800 text-white py-2 px-4 rounded-md inline-block mt-4"
                            >
                                Select
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Classes;

import { useEffect } from "react";
import useAxiosSecure from "../api/useAxiosSecure";
import { useState } from "react";

const PopularInstructor = () => {
    const [data, setData] = useState([])

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get('/instructor')
            .then(data => setData(data?.data))
    }, [axiosSecure])


    console.log(data);

    return <>
        <h2 className="text-4xl text-cyan-100 font-bold text-center my-8">Popular Instructors</h2>
        <div className="flex flex-wrap justify-center p-4">
            {data?.map((instructor) => (
                <div key={instructor._id} className="bg-white rounded-lg shadow-md p-6 m-4 w-72">
                    <img src={instructor.picture} alt={`Instructor ${instructor.name}`} className="rounded-full w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                    <p className="text-gray-500 mb-2">{instructor.email}</p>
                    <div className="flex items-center">
                        <span className="text-yellow-400 text-xl">&#9733;</span>
                        <p className="ml-1">{instructor.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
};

export default PopularInstructor;

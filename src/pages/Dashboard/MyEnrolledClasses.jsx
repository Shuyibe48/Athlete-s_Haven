import { useEffect } from "react";
import useAxiosSecure from "../../api/useAxiosSecure";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/enrolled/${user?.email}`)
            .then(data => setData(data?.data))
    }, [user, axiosSecure])


    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Class Name</th>
                        <th className="px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={item._id}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{item.className}</td>
                            <td className="border px-4 py-2">${item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyEnrolledClasses;
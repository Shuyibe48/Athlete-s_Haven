import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../api/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const SendFeedback = () => {

    const classes = useLoaderData()

    console.log(classes)

    // const axiosSecure = useAxiosSecure()

    // const { data: classes = [], isLoading, refetch, error } = useQuery({
    //     queryKey: ['class'],
    //     queryFn: async () => {
    //         const data = await axiosSecure.get(`/class/${id}`)
    //         // console.log({ fromTQ: data })
    //         return data?.data
    //     },
    // })
    // if (isLoading) return 'Loading...'
    // if (error) return 'An error has occurred' + error.message
    // console.log(classes);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <img
                src=''
                alt=''
                className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2"></h2>
            <p className="text-sm text-gray-600 mb-2">
                Instructor:
            </p>
            <p className="text-sm text-gray-600 mb-2">
                Instructor Email:
            </p>
            <p className="text-sm text-gray-600 mb-2">Price: </p>
            <p className="text-sm text-gray-600 mb-2">
                Available Sets:
            </p>
            <div className="mt-4">
                <textarea
                    placeholder="Send feedback"
                    className="border rounded px-4 py-2 w-full h-24 resize-none"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2"
                >
                    Send Feedback
                </button>
            </div>
        </div>
    );
};

export default SendFeedback;

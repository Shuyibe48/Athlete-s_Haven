import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateClass } from "../../api/class";

const UpdateClassForm = ({classId}) => {
    const { user } = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target
        const className = event.target.className.value
        const availableSeats = event.target.availableSeats.value
        const price = event.target.price.value

        // Image Upload
        const image = event.target.classImage.files[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
            }`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.display_url
                const classData = {
                    className,
                    availableSeats,
                    price: parseFloat(price),
                    image: imageUrl
                }

                updateClass(classId, classData)

                form.reset()
            })
            .catch(err => {
                console.log(err.message)
            })

    };

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <form
                className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl text-gray-800 font-bold mb-8 text-center">Update Class</h2>

                <div className="mb-4">
                    <label htmlFor="className" className="text-gray-800 block mb-2 font-medium">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="classImage" className="text-gray-800 block mb-2 font-medium">
                        Class Image
                    </label>
                    <input
                        type="file"
                        id="classImage"
                        accept='image/*'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorName" className="text-gray-800 block mb-2 font-medium">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-800"
                        value={user?.displayName}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="text-gray-800 block mb-2 font-medium">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-800"
                        value={user?.email}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableSeats" className="text-gray-800 block mb-2 font-medium">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="text-gray-800 block mb-2 font-medium">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateClassForm;

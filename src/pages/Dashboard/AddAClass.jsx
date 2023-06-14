import { useState } from 'react';

const AddAClass = () => {
    const [className, setClassName] = useState('');
    const [classImage, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [price, setPrice] = useState('');

    // Replace with the appropriate values for logged in user/instructor
    const instructorName = 'John Doe';
    const instructorEmail = 'johndoe@example.com';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Logic to create a class in the database
        const newClass = {
            className,
            classImage,
            instructorName,
            instructorEmail,
            availableSeats,
            price,
            status: 'pending',
        };

        console.log('New Class:', newClass);

        // Reset form fields
        setClassName('');
        setClassImage('');
        setAvailableSeats('');
        setPrice('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-8 text-center">Add A Class</h2>

                <div className="mb-4">
                    <label htmlFor="className" className="block mb-2 font-medium">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="classImage" className="block mb-2 font-medium">
                        Class Image
                    </label>
                    <input
                        type="text"
                        id="classImage"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        value={classImage}
                        onChange={(e) => setClassImage(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorName" className="block mb-2 font-medium">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        id="instructorName"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-100"
                        value={instructorName}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block mb-2 font-medium">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        id="instructorEmail"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-100"
                        value={instructorEmail}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block mb-2 font-medium">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        id="availableSeats"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        value={availableSeats}
                        onChange={(e) => setAvailableSeats(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAClass;

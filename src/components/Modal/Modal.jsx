import { useState } from 'react';

const Modal = ({ showModal, closeModal }) => {
    const [feedback, setFeedback] = useState('');


    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-500 text-white rounded-lg p-4 w-96">
                {/* Card Content */}
                <div className="space-y-4">
                    <img
                        src="image-url-here"
                        alt="Course"
                        className="w-full h-32 object-cover rounded-lg"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Course Name</h2>
                        <p className="text-sm">Instructor Name</p>
                        <p className="text-sm">Available Seats: X</p>
                        <p className="text-sm">Price: $Y</p>
                    </div>
                </div>

                {/* Feedback Form */}
                <div className="mt-4 text-black">
                    <textarea
                        rows="4"
                        placeholder="Write your feedback..."
                        className="w-full border p-2 rounded"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                </div>

                {/* Send Feedback Button */}
                <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            // Handle sending feedback here
                            console.log('Sending feedback:', feedback);
                            // Close the modal
                            closeModal();
                        }}
                    >
                        Send Feedback
                    </button>

                    <button
                        className="bg-red-500 ms-6 text-white px-4 py-2 rounded"
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

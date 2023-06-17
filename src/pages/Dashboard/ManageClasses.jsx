import { useEffect, useState } from "react";
import { approvedClass, denyClass, feedbackClass, getAllClass } from "../../api/class";

const ManageClasses = () => {
    const [classes, setClasses] = useState([])
    const [feedbackId, setFeedBackId] = useState('')
    const [feedBack, setFeedBack] = useState('')



    useEffect(() => {
        getAllClass()
            .then(data => setClasses(data))
    }, [])

    const approvedClick = id => {
        approvedClass(id)
    }

    const denyClick = id => {
        denyClass(id)
    }


    const getFeedbackId = id => {
        setFeedBackId(id)
    }

    const getFeedback = (event) => {

        const feedback = event.target.feedback.value

        setFeedBack(feedback)

        feedbackClass(feedbackId, feedBack)

        event.target.reset()
    }


    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Manage Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((classItem) => (
                    <div
                        key={classItem._id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <img
                                src={classItem.image}
                                alt={classItem.className}
                                className="w-full h-auto rounded-md mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2">{classItem.className}</h3>
                            <p>Instructor: {classItem.instructorName}</p>
                            <p>Email: {classItem.email}</p>
                            <p>Available Seats: {classItem.availableSeats}</p>
                            <p>Price: ${classItem.price}</p>
                            <p>Status: {classItem.status}</p>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => approvedClick(classItem._id)}
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                disabled={classItem.status === 'approved'}
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => denyClick(classItem._id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 mr-2"
                                disabled={classItem.status === 'approved'}
                            >
                                Deny
                            </button>
                            <button onClick={() => {
                                window.my_modal_3.showModal()
                                getFeedbackId(classItem._id)
                            }} className="bg-blue-500 btn hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                Send Feedback
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* You can open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box" onSubmit={getFeedback}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Send Feedback!</h3>

                    <label className="font-semibold" htmlFor="feedback">Feedback</label>
                    <br />
                    <input className="py-2 px-4 rounded w-full" name="feedback" type="text" id="feedback" placeholder="send feedback" />
                    <button type="submit" className="font-semibold mt-2 bg-slate-800 text-gray-100 rounded py-2 px-4">Send</button>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;

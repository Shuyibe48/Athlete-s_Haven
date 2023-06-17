import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getUserClasses } from "../../api/class";
import UpdateClassForm from "../../components/Forms/UpdateClassForm";

const MyClasses = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)
    const [classId, setClassId] = useState('')


    useEffect(() => {
        getUserClasses(user?.email)
            .then(data => setClasses(data))
    }, [user])

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">My Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((classItem) => (
                    <div
                        key={classItem._id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{classItem.className}</h3>
                            <p className="mb-4">Status: {classItem.status}</p>
                            <p>Total Enrolled Students: </p>
                            <p>Feedback: {classItem.feedback}</p>
                        </div>
                        <div className="mt-4">
                            <button onClick={() => {
                                window.my_modal_4.showModal()
                                setClassId(classItem._id)
                            }} className="bg-blue-500 btn hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                    <UpdateClassForm
                    classId={classId}
                     />
                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default MyClasses;

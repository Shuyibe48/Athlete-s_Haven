import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getUserClasses } from "../../api/class";

const MyClasses = () => {
    const [classes, setClasses] = useState([])
    const { user } = useContext(AuthContext)


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
                            <p className="mb-4">Status: </p>
                            <p>Total Enrolled Students: </p>
                            <p>Feedback: </p>
                        </div>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClasses;

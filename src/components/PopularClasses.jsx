import { useEffect, useState } from "react";
import { getAllClass } from "../api/class";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getAllClass()
            .then(data => setClasses(data))
    }, [])

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Popular Classes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map(classItem => (
                        <div
                            key={classItem._id}
                            className="relative overflow-hidden rounded-lg shadow-md"
                        >
                            <div
                                className="bg-gradient-to-b from-transparent to-black bg-opacity-60 transition-opacity"
                                style={{
                                    backgroundImage: `url(${classItem.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    paddingBottom: '100%',
                                }}
                            >
                                <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-white opacity-0 transition-opacity">
                                    <h3 className="text-2xl font-semibold mb-2">{classItem.className}</h3>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="bg-black bg-opacity-50 p-4">
                                    <h3 className="text-2xl font-semibold text-white">{classItem.className}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;

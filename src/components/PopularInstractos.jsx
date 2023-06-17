import { useEffect, useState } from 'react';
import FastMarquee from 'react-fast-marquee';
import { getUser } from '../api/auth';

const PopularInstructors = () => {
    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        getUser()
            .then(data => setInstructor(data))
    }, [])

    const instructors = instructor.filter(inst => inst.role === 'instructor')

    console.log(instructors);

    
    const handleImageHover = (event) => {
        event.target.classList.toggle('hovered');
    };

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Popular Instructors</h2>
                <div className="flex items-center justify-center">
                    <FastMarquee className="w-full" gradient={false} speed={60} pauseOnHover>
                        {instructors.map((instructor) => (
                            <div
                                key={instructor._id}
                                className="relative flex items-center mr-8 hover:cursor-pointer"
                            >
                                <div
                                    className="w-48 h-64 rounded-lg overflow-hidden transition-all duration-300"
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageHover}
                                >
                                    <img
                                        src={instructor.picture}
                                        alt={instructor.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                                        <p className="text-2xl font-semibold">{instructor.name}</p>
                                        <div className="flex items-center mt-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-yellow-400 mr-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 0L12.307 6.981h5.02l-4.057 3.134 1.61 6.017L10 14.819l-4.881 2.313 1.61-6.017L2.673 6.98h5.02L10 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </FastMarquee>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;

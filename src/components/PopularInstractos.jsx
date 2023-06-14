import FastMarquee from 'react-fast-marquee';

const PopularInstructors = () => {
    const instructors = [
        {
            name: 'Instructor 1',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 1 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
        {
            name: 'Instructor 2',
            image: 'https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            text: 'Instructor 2 description',
        },
    ];

    const handleImageHover = (event) => {
        event.target.classList.toggle('hovered');
    };

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Popular Instructors</h2>
                <div className="flex items-center justify-center">
                    <FastMarquee className="w-full" gradient={false} speed={60} pauseOnHover>
                        {instructors.map((instructor, index) => (
                            <div
                                key={index}
                                className="relative flex items-center mr-8 hover:cursor-pointer"
                            >
                                <div
                                    className="w-48 h-64 rounded-lg overflow-hidden transition-all duration-300"
                                    onMouseEnter={handleImageHover}
                                    onMouseLeave={handleImageHover}
                                >
                                    <img
                                        src={instructor.image}
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
                                            <p className="text-sm">{instructor.rating}</p>
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

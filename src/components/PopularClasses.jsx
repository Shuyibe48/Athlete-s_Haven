const PopularClasses = () => {
    const classes = [
        {
            title: 'Class 1',
            image: 'https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            description: 'Class 1 description',
        },
        {
            title: 'Class 2',
            image: 'https://example.com/image2.jpg',
            description: 'Class 2 description',
        },
        {
            title: 'Class 3',
            image: 'https://example.com/image3.jpg',
            description: 'Class 3 description',
        },
        {
            title: 'Class 4',
            image: 'https://example.com/image4.jpg',
            description: 'Class 4 description',
        },
        {
            title: 'Class 5',
            image: 'https://example.com/image5.jpg',
            description: 'Class 5 description',
        },
        {
            title: 'Class 6',
            image: 'https://example.com/image6.jpg',
            description: 'Class 6 description',
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Popular Classes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map((classItem, index) => (
                        <div
                            key={index}
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
                                    <h3 className="text-2xl font-semibold mb-2">{classItem.title}</h3>
                                    <p className="text-sm text-center">{classItem.description}</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="bg-black bg-opacity-50 p-4">
                                    <h3 className="text-2xl font-semibold text-white">{classItem.title}</h3>
                                    <p className="text-sm text-white">{classItem.description}</p>
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

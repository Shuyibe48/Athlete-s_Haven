const BannerSection = () => {
    return (
        <div className="flex gap-4 flex-col md:flex-row items-center md:justify-between bg-gray-100 p-4 md:p-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <img src='https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt="Banner" className="max-w-full h-auto animate-pulse" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Title</h1>
                <p className="text-lg leading-relaxed mb-8">
                Athelet's Haven work for summer school. It play for kid and activities can access kids.
                </p>
                <p className="animate-pulse bg-gray-800 text-white py-2 px-4 rounded-md inline-block">
                    Athelet's Haven work for summer school.
                </p>
            </div>
        </div>
    );
};

export default BannerSection;


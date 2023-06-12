const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Athlete's Haven. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

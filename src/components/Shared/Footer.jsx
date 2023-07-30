import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <span className="text-white ml-2 text-lg font-bold">Athlete's Haven</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            A place where athletes thrive and dreams come true. Join our community and unlock your true potential.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white text-sm font-bold">Contact</h3>
                        <p className="text-gray-300 text-sm">Email: athlete's@haven.com</p>
                        <p className="text-gray-300 text-sm">Phone: +1 123-456-7890</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-gray-300 hover:text-white transition-colors duration-200" size={24} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-gray-300 hover:text-white transition-colors duration-200" size={24} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-gray-300 hover:text-white transition-colors duration-200" size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white text-sm font-bold">Address</h3>
                        <p className="text-gray-300 text-sm">1234 Street Name</p>
                        <p className="text-gray-300 text-sm">City, State, ZIP Code</p>
                        <p className="text-gray-300 text-sm">USA</p>
                    </div>
                </div>
                <hr className="border-gray-700 my-8" />
                <p className="text-gray-300 text-sm text-center">
                    &copy; {new Date().getFullYear()} Athlete's Haven. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

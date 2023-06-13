import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHome, FaChalkboardTeacher, FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logOut()
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-lg font-bold">
                            Athlete's Haven
                        </Link>
                        <div className="ml-4 space-x-4 hidden md:flex">
                            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <FaHome />
                            </Link>
                            <Link to="/instructors" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <FaChalkboardTeacher />
                            </Link>
                            <Link to="/classes" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <FaDumbbell />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 md:hidden">
                        <button
                            onClick={handleMenuToggle}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="mt-4 space-y-4">
                            <Link
                                to="/"
                                className="block text-gray-300 hover:text-white transition-colors duration-200"
                                onClick={handleMenuToggle}
                            >
                                Home
                            </Link>
                            <Link
                                to="/instructors"
                                className="block text-gray-300 hover:text-white transition-colors duration-200"
                                onClick={handleMenuToggle}
                            >
                                Instructors
                            </Link>
                            <Link
                                to="/classes"
                                className="block text-gray-300 hover:text-white transition-colors duration-200"
                                onClick={handleMenuToggle}
                            >
                                Classes
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 hidden md:flex">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Logout
                                </button>
                                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                                    <FaUser className="mr-2" />
                                    <img src={user?.photoURL} alt="Profile" className="h-6 w-6 rounded-full" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Login
                                </Link>
                                <Link to="/signup" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Sign In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

import { useState } from "react";

const NavBar = ({ isLoggedIn, userProfilePicture }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-lg font-bold">Athlete's Haven</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/instructors" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Instructors</a>
              <a href="/classes" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Classes</a>
              {isLoggedIn ? (
                <>
                  <a href="/dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                  <div className="flex items-center">
                    <img src={userProfilePicture} alt="User Profile" className="w-8 h-8 rounded-full" />
                  </div>
                </>
              ) : (
                <a href="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/instructors" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Instructors</a>
              <a href="/classes" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Classes</a>
              {isLoggedIn ? (
                <>
                  <a href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <div className="flex items-center">
                    <img src={userProfilePicture} alt="User Profile" className="w-8 h-8 rounded-full" />
                  </div>
                </>
              ) : (
                <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { AuthContext } from '../providers/AuthProvider'
import StudentMenu from './StudentMenu'
import InstructorMenu from './InstructorMenu'
const Sidebar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const role = 'host'

    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        Athlete's_Haven
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex py-2 justify-center items-center bg-gray-900 font-bold mx-auto'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-6 h-6 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/'>Athlete's Haven</Link>
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-100  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-200  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {role && role === 'host' ? (
                                <>
                                    <label
                                        htmlFor='Toggle3'
                                        className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                                    >
                                        <input
                                            onChange={toggleHandler}
                                            id='Toggle3'
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <span className='px-4 py-1 text-gray-100 rounded-l-md bg-gray-800 peer-checked:bg-gray-300'>
                                            Student
                                        </span>
                                        <span className='px-4 py-1 text-gray-100 rounded-r-md bg-gray-400 peer-checked:bg-gray-800'>
                                            Instructor
                                        </span>
                                    </label>
                                    {/* Menu Links */}
                                    {toggle ? <StudentMenu /> : <InstructorMenu />}
                                </>
                            ) : (
                                <InstructorMenu />
                            )}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 text-gray-100 font-medium'>Home</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 text-gray-100 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium text-gray-100'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
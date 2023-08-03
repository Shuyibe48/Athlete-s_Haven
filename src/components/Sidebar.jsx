import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { FaHouseDamage } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider'
import AdminMenu from './AdminMenu'
import StudentMenu from './StudentMenu'
import InstructorMenu from './InstructorMenu'
import { getASingleUser } from '../api/auth'
const Sidebar = () => {
    const [dbUser, setDbUser] = useState([])
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        getASingleUser(user?.email)
            .then(data => setDbUser(data))
    }, [user])

    const [isActive, setActive] = useState('false')

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
            <div className='bg-gray-100 text-gray-800  flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        Athlete's Haven
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
                                    src={dbUser?.picture}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/'>
                                <span className='text-gray-100'>Athlete's Haven</span>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-100  hover:underline'>
                                    {dbUser?.name}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-200  hover:underline'>
                                    {dbUser?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <h5 className='text-center font-bold text-cyan-100'>{dbUser?.role === 1 && 'Student' || dbUser?.role === 2 && 'Instructor' ||  dbUser?.role === 3 && 'Admin'}</h5>
                        <nav>
                            {dbUser?.role && dbUser?.role === 3 && (
                                <>
                                    <AdminMenu />
                                </>
                            )}
                            {dbUser?.role && dbUser?.role === 2 && (
                                <>
                                    <InstructorMenu />
                                </>
                            )}
                            {dbUser?.role === 2 || dbUser?.role === 3 || (
                                <>
                                    <StudentMenu />
                                </>
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
                        <FaHouseDamage className='w-5 h-5' />

                        <span className='mx-4 text-gray-100 font-medium'>Home</span>
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
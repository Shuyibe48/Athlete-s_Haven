import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
const AdminMenu = () => {
    const { user } = useContext(AuthContext)


    return (
        <>
            <Link
                to='dashboard/manageClasses'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium'>Manage Classes</span>
            </Link>
            <Link
                to='dashboard/manageUsers'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium'>Manage Users</span>
            </Link>
        </>
    )
}

export default AdminMenu;
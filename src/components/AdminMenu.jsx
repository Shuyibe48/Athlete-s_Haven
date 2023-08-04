import { Link } from 'react-router-dom'
const AdminMenu = () => {


    return (
        <>
            <Link
                to='dashboard/manageClasses'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium text-gray-100'>Manage Classes</span>
            </Link>
            <Link
                to='dashboard/manageUsers'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium text-gray-100'>Manage Users</span>
            </Link>
        </>
    )
}

export default AdminMenu;
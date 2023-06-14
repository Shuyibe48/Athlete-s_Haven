import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const StudentMenu = () => {
    const { user } = useContext(AuthContext)


    return (
        <>
            <Link
                to='dashboard/mySelectedClasses'
                className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium'>My Select Classes</span>
            </Link>
            <Link
                to='dashboard/myEnrolledClasses'
                className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium'>My Enrolled Classes</span>
            </Link>
        </>
    )
}

export default StudentMenu;
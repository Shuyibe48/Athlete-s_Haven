import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const StudentMenu = () => {
    const { user } = useContext(AuthContext)


    return (
        <>
            <Link
                to='dashboard/mySelectedClasses'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium text-gray-100'>My Select Classes</span>
            </Link>
            <Link
                to='dashboard/myEnrolledClasses'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium text-gray-100'>My Enrolled Classes</span>
            </Link>
            <Link
                to='dashboard/paymentHistory'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >

                <span className='mx-4 font-medium text-gray-100'>Payment History</span>
            </Link>
        </>
    )
}

export default StudentMenu;
import { Link } from 'react-router-dom'

const InstructorMenu = () => {
    return (
        <>
            <Link
                to='dashboard/addAClass'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >
                <span className='mx-4 font-medium text-gray-100'>Add A Class</span>
            </Link>
            <Link
                to='dashboard/myClasses'
                className='flex items-center px-4 py-2 mt-5 border-b border-gray-100 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700'
            >
                <span className='mx-4 font-medium text-gray-100'>My Classes</span>
            </Link>
        </>
    );
};

export default InstructorMenu;
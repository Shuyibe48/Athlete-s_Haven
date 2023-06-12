import NavBar from '../components/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <>
            <NavBar />
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;
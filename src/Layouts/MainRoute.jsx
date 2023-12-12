import Navbar from './../components/Navbar';
import Banner from './../components/Banner';

const MainRoute = () => {

    return (
        <div className="container mx-auto relative bg-gradient-to-r ">
            <div className='mb-16'>
            <Navbar></Navbar>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default MainRoute;
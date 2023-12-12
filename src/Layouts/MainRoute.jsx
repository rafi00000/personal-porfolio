import Navbar from './../components/Navbar';
import Banner from './../components/Banner';
import Skills from './../components/Skills';

const MainRoute = () => {

    return (
        <div className="container mx-auto relative primary-bg">
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
        </div>
    );
};

export default MainRoute;
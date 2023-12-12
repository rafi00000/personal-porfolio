import Navbar from "./../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './../components/Footer';

const MainRoute = () => {
  return (
    <div className="container mx-auto relative primary-bg space-y-5 ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainRoute;

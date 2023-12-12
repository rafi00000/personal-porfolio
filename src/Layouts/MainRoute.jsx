import Navbar from "./../components/Navbar";

import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <div className="container mx-auto relative primary-bg space-y-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoute;

import { NavLink } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";

const Navbar = () => {
  
  return (
      <div className="h-16 top-0 container border flex items-center justify-between p-14 bg-slate-800 text-white">
        <div className="flex-1">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600">Rafiul Islam</h2>
        </div>

        <div className="flex gap-5 flex-1">
        <NavLink to={'/'} className={(isActive) => {isActive ? "bg-red-400" : ""}}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        </div>

        <div>
          <a href="mailto:delwar2021bd@gmail.com"><FaRegEnvelope></FaRegEnvelope></a>
        </div>
      </div>
  );
};

export default Navbar;

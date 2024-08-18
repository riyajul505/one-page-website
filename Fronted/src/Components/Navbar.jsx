import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            OnePage
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost border-black">
            <NavLink to={'/login'}>SignUp/Login</NavLink>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

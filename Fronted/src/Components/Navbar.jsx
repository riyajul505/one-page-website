import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const {user, googleSignOut} = useContext(AuthContext);
  const logOut = () =>{
    googleSignOut()
    
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            OnePage
          </a>
        </div>
        <div className="flex-none">
          {
            !user && <button className="btn btn-ghost border-black">
            <NavLink to={'/login'}>SignUp/Login</NavLink>
          </button>
          }
          {
            user && (<button onClick={logOut} className="btn btn-ghost border-black">LogOut</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

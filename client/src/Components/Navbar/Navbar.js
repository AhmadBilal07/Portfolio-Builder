import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const user = false;
  return (
    <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <FaUser className="mr-1" /> PB
        </NavLink>

        <div className="navbar-nav ml-auto">
          {user && (
            <NavLink className="nav-item nav-link" to="/profile">
              Profile
            </NavLink>
          )}
          {!user && (
            <NavLink className="nav-item nav-link" to="/login">
              Login / SignUp
            </NavLink>
          )}

          {user && (
            <NavLink className="nav-item nav-link" to="/login">
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Edu from "./edu.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black",position:"sticky"}}>
      <div className="container">
        <Link exact to="/">
          <img src={Edu} width="50px" height="50px" style={{borderRadius:"30%",margin:"0% 5px -8px -35px"}} />
        </Link>
        <h4 style={{color:"white",margin:"0px 55% 0px 5px",fontFamily:"cursive"}}>Educate</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin:"0% 7% 0% 27%"}}>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/details">
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" exact
        to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" exact
        to="/Image">Images</NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

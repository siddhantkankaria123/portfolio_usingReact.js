import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <div className="header">
        <Link to={"/"}>
          <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/project"}>Project</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div> */}
      <div className=" Navbar-container">
        <header className="nav-container ">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/project"} className="nav-link">
                PROJECT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;

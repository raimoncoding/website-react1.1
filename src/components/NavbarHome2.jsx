import React, { useState } from "react";
import cover from "../images/cover.webp";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function NavbarHome () {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="nav-item"
      role="navigation"
      aria-label="main navigation"
    >
    <div className="container">
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger burger ${isOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        </div>
        <img className="logo"src={cover} alt="my own logo, raimoncoding"></img>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="nav-link" activeclassName="is-active" to="/Home">
              Home
            </NavLink>

            <NavLink
              className="nav-link"
              activeclassName="is-active"
              to="/Services"
            >
              About
            </NavLink>

            <NavLink
              className="nav-link"
              activeclassName="is-active"
              to="/About"
            >
              About
            </NavLink>

            <NavLink
              className="nav-link"
              activeclassName="is-active"
              to="/Clients"
            >
              Clients
            </NavLink>

            <NavLink
              className="nav-link"
              activeclassName="is-active"
              to="/Contact"
            >
              Contact
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
  // <div className="nav-item">
  // <img className="logo"src={cover} alt="my own logo, raimoncoding"></img>
  // <Link className="nav-link" to={Home}>Home</Link>
  // <Link className="nav-link" to={Services}>Services</Link>
  // <Link className="nav-link" to={About}>About</Link>
  // <Link className="nav-link" to={Clients}>Clients</Link>
  // <Link className="nav-link" to={Contact}>Contact</Link>
  //
  // </div>

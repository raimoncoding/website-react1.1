import React from "react";
import { Link } from 'react-router-dom';
// import About from "./About";
// import Clients from "./Clients";
// import Contact from "./Contact";
// import Home from "./Home";
// import Services from "./Services";

function Navbar() {
  return (
  <div className="nav-item">
  <Link className="nav-link" to="/Home">Home</Link>
  <Link className="nav-link" to="/Services">Services</Link>
  <Link className="nav-link" to="/About">About</Link>
  <Link className="nav-link" to="/Clients">Clients</Link>
  <Link className="nav-link" to="/Contact">Contact</Link>
  </div>
);
}

export default Navbar;

import React from "react";
import cover from "../images/cover.webp";
import { Link } from 'react-router-dom';

function NavbarHome() {
  return (
  <div className="nav-item">
  <img className="logo"src={cover} alt="my own logo, raimoncoding"></img>
  <Link className="nav-link" to="/">Home</Link>
  <Link className="nav-link" to="/Services">Services</Link>
  <Link className="nav-link" to="/About">About</Link>
  <Link className="nav-link" to="/Clients">Clients</Link>
  <Link className="nav-link" to="/Contact">Contact</Link>
  </div>
);
}

export default NavbarHome;

// import Home from "./Home";
// import About from "./About";
// import Clients from "./Clients";
// import Contact from "./Contact";
// import Services from "./Services";

// <NavbarHome />
// <Route path="/Home" element={<Home />} />
// <Route path="/Services" element={<Services />} />
// <Route path="/About" element={< About />} />
// <Route path="/Clients" element={<Clients />} />
// <Route path="/Contact" element={<Contact />} />

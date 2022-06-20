import React from "react";
import cover from "../images/cover.webp";
import developer from "../images/developer.webp";
import responsive from "../images/responsive.webp";
import { Link } from 'react-router-dom';

function NavbarAndHome() {
  return (
  <div className="nav-item">
  <img className="logo"src={cover} alt="my own logo, raimoncoding"></img>
  <Link className="nav-link" to="/">Home</Link>
  <Link className="nav-link" to="/Services">Services</Link>
  <Link className="nav-link" to="/About">About</Link>
  <Link className="nav-link" to="/Clients">Clients</Link>
  <Link className="nav-link" to="/Contact">Contact</Link>

      <main>
    <div className="header">
        <img className="website"src={developer} alt="phone, Imac pc and tablet to represent responsive design"></img>
      <article>
        <div>
      <h1>Responsive design, HTML, CSS, JavaScript</h1>
      <p>Freelance web designer and developer based in West Friesland, Netherlands.
        Most eligible and skilled in creating custom websites.</p>
    </div>
      </article>
      </div>
<div className="spacing">

</div>

      <div className="middle-container">
        <figure>
          <img className="company"src={responsive} alt="another phone, Imac pc and tablet to represent responsive design"></img>
       </figure>
        <article>
          <div>
        <h1>Online presence</h1>
        <p>“The secret of a high-ranking website is not its colours but its content.”</p>
        <p>– Amit Kalantri</p>
      </div>
        </article>
        </div>
      </main>

        <footer className="container-fluid">
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/RaimonLab/creations">3dCults</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
            <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© <script>document.write(new Date().getFullYear())</script> www.raimoncoding.com</a></p>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://unsplash.com/s/photos/developer">Photo by Nubelson Fernandes on Unsplash</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://unsplash.com/s/photos/responsive-web-design">Photo by Domenico Loia on Unsplash</a>
        </footer>
  </div>
);
}

export default NavbarAndHome;

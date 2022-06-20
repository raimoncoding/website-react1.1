import React from "react";
import { Link } from 'react-router-dom';
import contact from "../images/contact.webp";
import hands from "../images/hands.webp";


function Contact() {
  return (
    <div>

      <main>
        <div className="header">
          <figure>
            <img className="raimon"src={contact} alt="an old typewriter typing contact"></img>
          </figure>
          <article>
            <div>
              <h1>Contact us</h1>
              <p>If you have any questions about the services I offer,
                 please send me a message. I will contact you as soon as possible.</p>
                 <div className="spacing"></div>
              <a className="Social" href="mailto:info@raimoncoding.com">Contact</a>
        </div>
          </article>
          </div>

      <div className="spacing3"></div>

          <div className="middle-container">
            <figure>
              <img className="company"src={hands} alt="color painted human hands"></img>
            </figure>
            <article>
              <div>
               <h1>If you have any ideas.</h1>
               <p>"We'd love to hear from you."</p>
             </div>
            </article>
          </div>
            <div className="spacing2"></div>
        </main>

            <footer className="container-fluid">
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/RaimonLab/creations">3dCults</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
                <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© <script>document.write(new Date().getFullYear())</script> www.raimoncoding.com</a></p>
                <a className="footer-link" target="_blank"rel="noreferrer"  href="https://unsplash.com/s/photos/contact-us">Photo by Markus Winkler on Unsplash</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.pexels.com/nl-nl/zoeken/contact%20us/">Photo by cottonbro</a>
                <Link className="footer-link" href="top"to="/PrivacyNotice">Privacy Notice</Link>
            </footer>
    </div>
  );
}

export default Contact;

import React from "react";
import example2 from "../images/example2.webp";
import example3 from "../images/example3.webp";


function Clients() {
  return (
    <div>

        <main>
        <div className="header">
          <figure>
            <img className="website"src={example3} alt="an example webpage that contains contact details."></img>
           </figure>
          <article>
            <div>
          <h1>Adaptivity</h1>
          <p>"We don't want to push our ideas on to customers, we simply want to make what they want."</p>
        </div>
          </article>
          </div>
    <div className="spacing">

    </div>

          <div className="middle-container">
            <figure>
              <img className="company"src={example2} alt="an example business webpage in white and blue"></img>
           </figure>
            <article>
              <div>
            <h1>Online presence</h1>
            <p>"When you help others feel important, you help yourself feel important too."</p>
            <p>– David J. Schwartz</p>
          </div>
            </article>
            </div>
            </main>

            <footer className="container-fluid">
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/RaimonLab/creations">3dCults</a>
                <a className="footer-link" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
                <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© <script>document.write(new Date().getFullYear())</script> www.raimoncoding.com</a></p>
            </footer>
    </div>
  );
}

export default Clients;

import React from "react";
import raimon from "../images/raimon.webp";
import example4 from "../images/example4.webp";


function About() {
  return (
    <div>

        <main>
        <div className="header">
          <figure>
            <img className="raimon"src={raimon} alt="Cartoon of myself"></img>
          </figure>
          <article>
            <div>
              <h1>Hello I'm Raimon</h1>
              <p>I'm a 3d designer and software developer. In the world of 3d design,
                 i design 3d models with the use of CAD software. With technologys such as: Blender,
                  Meshmixer and TinkerCad i make practical and artistic 3d models.
                   With my expertise in software development i'm specialised in Front-End Design.
                    I make websites with use of the markup language HTML5 and styling language CSS3.
                     I also have knowledge of programming languages ​​such as JavaScript and Python.</p>
        </div>
          </article>
          </div>
    <div className="spacing">

    </div>

          <div className="middle-container">
            <figure>
              <img className="company"src={example4} alt="a website i developed with a sport theme"></img>
           </figure>
            <article>
              <div>
            <h1>Retain and target customers on social media</h1>
            <p> “A website can make money for you while you are asleep.”</p>
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
            </footer>
    </div>
  );
}

export default About;

import React from "react";
import printer from "../images/printer.webp";
import code from "../images/code.webp";
import blog from "../images/blog.webp";


function Services() {
  return (
<div>

  <main>
    <div className="header">
      <figure>
        <img className="printer"src={printer} alt="my 3d printer, it's an Ultimaker"></img>
     </figure>
      <article>
        <div>
          <h1>3d Printing & 3d Modelling</h1>
          <p>I design beautiful 3D printable 3D models. Including about 500 free 3D models for you to download.</p>
          <div className="spacing"></div>
          <p><em>Have a look at my portfolio at:<strong><a className="Social" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/RaimonLab/creations">3dCults</a></strong></em></p>
    </div>
      </article>
      </div>
<div className="spacing">

</div>
    <div className="spacing"></div>
      <div className="middle-container">
        <figure>
          <img className="company"src={code} alt="phone winith eat, sleep, code, repeat"></img>
       </figure>
        <article>
          <div>
            <h1>Programming</h1>
            <p>I'm also a software developer. I can design a website for you, with traditional techniques. I have created a profile on both UpWork and Fiverr.
               There you can use my freelance services. I also make Computer Quizzes in Python.</p>
               <div className="spacing"></div>
            <p><em>Have a look at my portfolio at:<strong><a className="Social" target="_blank" rel="noreferrer" href="https://nl.fiverr.com/raimoncoding/">Fiverr</a></strong></em></p>
            <div className="spacing"></div>
            <p><em>Have a look at my portfolio at:<strong><a className="Social" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a></strong></em></p>
      </div>
        </article>
        </div>

        <div className="middle-container2">
          <figure>
            <img className="company2"src={blog} alt="Blog letters in brown wood"></img>
         </figure>
          <article>
            <div>
              <h1>Blogs about my Study</h1>
              <p>I also write blogs on Medium. There you can read about my experiences in online coding bootcamps and 3d printing.</p>
              <div className="spacing"></div>
              <p><em>Have a look at my blogposts at:<strong><a className="Social" target="_blank" rel="noreferrer" href="https://medium.com/@raimoncoding">Medium</a></strong></em></p>
        </div>
          </article>
          </div>
        </main>

        <footer className="container-fluid">
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~01db073e93aefd8fac?viewMode=1">UpWork</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://cults3d.com/en/users/RaimonLab/creations">3dCults</a>
            <a className="footer-link" target="_blank" rel="noreferrer"  href="https://nl.fiverr.com/raimoncoding/">Fiverr</a>
            <p className="copyright"><a className="footer-link" target="_blank" rel="noreferrer" href="https://www.raimoncoding.com/">© <script>document.write(new Date().getFullYear())</script> www.raimoncoding.com</a></p>
            <a className="footer-link" target="_blank" rel="noreferrer"  href="https://unsplash.com/s/photos/code">Photo by Roman Synkevych on Unsplash</a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.pexels.com/nl-nl/zoeken/services/">Foto door Pixabay</a>
        </footer>
</div>
);
}

export default Services;

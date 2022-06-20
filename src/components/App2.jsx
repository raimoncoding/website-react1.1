import React from "react";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Home from "./Home";
import NavbarHome from "./NavbarHome";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import PrivacyNotice from "./PrivacyNotice";
import Services from "./Services";
import {BrowserRouter, Routes, Route} from "react-router-dom";



// <Route path="/Footer" element={<Footer />} />
// <Route path="/NavbarHome" element={<NavbarHome />} />
// <Route path="/Navbar" element={<Navbar />} />
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavbarHome />
    <Home />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/PrivacyNotice" element={<PrivacyNotice />} />
            <Route path="/Navbar" element={<PrivacyNotice />} />
            <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
// <Routes>
//   <Route path="/Home" index element={<Home />} />
//     <Route path="/About" index element={<About />} />
//       <Route path="/Clients" index element={<Clients />} />
//       <Route path="/Contact" index element={<Contact />} />
//       <Route path="/Footer" index element={<Footer />} />
//       <Route path="/Navbar" index element={<Navbar />} />
//       <Route path="/NavbarHome" index element={<NavbarHome />} />
//       <Route path="/PrivacyNotice" index element={<PrivacyNotice />} />
//       <Route path="/Services" index element={<Services />} />
// </Routes>

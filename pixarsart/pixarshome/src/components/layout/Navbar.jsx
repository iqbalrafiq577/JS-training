// Navbar.js
import React, { useState } from "react";
import "../../assets/style/components/layout/navbar.css";
import logo from "../../assets/images/logo/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <button className="navToggle" onClick={toggleNav}>
        <RxHamburgerMenu />
      </button>

      <div className={`navlinks ${isNavVisible ? "visible" : ""}`}>
        <ul>
          <li>SERVICES</li>
          <li>ENTERPRISE</li>
          <li>ABOUT US</li>
          <li>OUR WORK</li>
          <li>RESOURCES</li>
          <li>CAREERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
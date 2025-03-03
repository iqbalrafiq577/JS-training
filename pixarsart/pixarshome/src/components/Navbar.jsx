import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/style/navbar.css";

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

            {/* Toggle Button for Mobile */}
            <button className="nav-toggle" onClick={toggleNav}>
                ☰
            </button>

            {/* Navigation Links */}
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
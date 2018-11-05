import React from "react";
import "./nav.css";

const Nav = () => (
    <div>
        <nav id="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
                <a id="navItem" href="#about" className="navbar-item">About</a>
                <a id="navItem" href="#portfolio" className="navbar-item">Portfolio</a>
                <a id="navItem" href="#contact" className="navbar-item">Contact</a>
            </div>
        </nav>
    </div >
)

export default Nav;
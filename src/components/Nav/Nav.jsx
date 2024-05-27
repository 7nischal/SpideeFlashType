import React from "react";
import logo from './../../assets/logoo.jpg';
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="spider-logo" src={logo} alt="logo" />
                <p className="spider-logo-text">SpideeFlashType</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://github.com/7nischal"
                    rel="noreferrer"
                >Nischal</a>
            </div>
        </div>
    )
}

export default Nav;
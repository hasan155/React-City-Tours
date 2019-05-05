import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../logo.png";


class Navbar extends Component {
    render() {
        return<nav className="navbar">
            <img src={logo} alt="City tours logo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        home
                    </a>
                </li>
                < li >
                    <a href="/" className="nav-link">
                        about 
                    </a> 
                </li>  
                <li>
                    <a href="/" className="nav-link active">
                        tours
                    </a>
                </li>              
            </ul>
        </nav>
    }
}
export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../asset/navlogo.png";
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <img src={navlogo} alt="Nav logo"></img>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/bookingform">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
    );
}

export default Nav;
import React from "react";
// import { Link } from "react-router-dom";
import navlogo from "./navlogo.png";
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <img src={navlogo} alt="Nav logo"></img>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>    
        </nav>
    );
}

export default Nav;
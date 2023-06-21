import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/navlogo.png";
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <img src={navlogo} alt="Nav logo"></img>
        <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/">Reservations</Link></li>
            <li><Link to="/booking">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
        </nav>
    );
}

export default Nav;
import React from "react";
import "./Header.css";
import littlelemon from "./littlelemon.jpg"

function Header() {
    return (
        <header>
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>
                    Reserve a table
                </button>
            </div>
               
            <div className="right">
                <img src={littlelemon} alt="Little Lemon Header">
                </img>
            </div>
        </header>
    );
}

export default Header;

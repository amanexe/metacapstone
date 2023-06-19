import React from "react";
import "./Footer.css";
// import footerlogo from "./footerlogo.png"

function Footer() {
    return (
        <footer>
            <section className="container">
                <div className="logo">
                    <h3>Logo</h3>
                    </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address: 210, Test Street, Chicago</li>
                        <li>Phone no:- 252 000 000</li>
                        <li>Email:- littlelemon@test.com</li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Social</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
            </section>
            <section className="copyright">
                Copyright Little Lemon Restaurant 2023
            </section>
        </footer>
    );
}

export default Footer;
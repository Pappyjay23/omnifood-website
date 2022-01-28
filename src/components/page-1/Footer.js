import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-links">
                <div className="left">
                    <Link to="/" className="footer-link">About Us</Link>
                    <Link to="/" className="footer-link">Blog</Link>
                    <Link to="/" className="footer-link">Press</Link>
                    <Link to="/" className="footer-link">iOS App</Link>
                    <Link to="/" className="footer-link">Android App</Link>
                </div>
                <div className="right">
                    <Link to="/" className="socials"><i className="fab fa-facebook"></i></Link>
                    <Link to="/" className="socials"><i className="fab fa-twitter"></i></Link>
                    <Link to="/" className="socials"><i className="fab fa-google-plus"></i></Link>
                    <Link to="/" className="socials"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
            <p className="copy">Copyright © 2020 Omnifoodie. All rights reserved.</p>
        </div>
    )
}

export default Footer

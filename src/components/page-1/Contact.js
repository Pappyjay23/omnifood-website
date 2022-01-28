import React from 'react'
import { Button } from './Button'
import "./Contact.css"

function Contact() {
    return (
        <div className="section-contact">
            <div className="container">
                <h1 className="page-title">We're happy to hear from you</h1>
                <form className="contact-form">
                    <div className="line">
                        <label>Name:</label>
                        <input type="text" placeholder="Your name.." />
                    </div>
                    <div className="line">
                        <label>Email:</label>
                        <input type="email" placeholder="Your email.." />
                    </div>
                    <div className="line">
                        <label>How did you find us:</label>
                        <select>
                            <option value="">Friends</option>
                            <option value="">Social Media</option>
                            <option value="">Advertisement</option>
                            <option value="">Others</option>
                        </select>
                    </div>
                    <div className="line">
                        <label>Newsletter:</label>
                        <div className="check">
                            <input type="checkbox" />
                            <span>Yes, Please.</span>
                        </div>
                    </div>
                    <div className="line">
                        <label>Drop us a line:</label>
                        <textarea placeholder="Your message..."></textarea>
                    </div>
                    <div className="line btn">
                        <label></label>
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

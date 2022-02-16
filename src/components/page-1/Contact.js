import React from 'react'
import { Button } from './Button'
import "./Contact.css"
import {motion} from "framer-motion/dist/framer-motion"

function Contact({fade}) {
    return (
        <div className="section-contact">
            <motion.div viewport={{once: true}} className="container">
                <motion.h1 initial={{opacity: 0}} whileInView={fade} className="page-title">We're happy to hear from you</motion.h1>
                <motion.form initial={{opacity: 0}} whileInView={fade} className="contact-form">
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
                </motion.form>
            </motion.div>
        </div>
    )
}

export default Contact

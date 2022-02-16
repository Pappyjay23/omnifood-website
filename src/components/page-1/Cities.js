import React from 'react'
import { Link } from 'react-router-dom'
import "./Cities.css"
import {CitiesItems} from "./CitiesItems"
import {motion} from "framer-motion/dist/framer-motion"

function Cities({fade}) {
    return (
        <div className="section-cities" id='cities'>
            <motion.div className="container" viewport={{ once: true }}>
                <motion.h1 initial={{opacity: 0}} whileInView={fade} className="page-title">WE'RE CURRENTLY IN THESE CITIES</motion.h1>
                <motion.div initial={{opacity: 0}} whileInView={fade} className="cities-grid">
                       {CitiesItems.map((cd)=>{
                           return(
                                <div className="cities-grid-item">
                                    <div className="cities-images">
                                        <figure>
                                            <img src={cd.image} alt={cd.name} />
                                        </figure>
                                        <p>{cd.name}</p>
                                    </div>
                                    <div className="icons">
                                        <i className={cd.icon1}></i>
                                        <p>{cd.eaters}</p>
                                    </div>
                                    <div className="icons">
                                        <i className={cd.icon2}></i>
                                        <p>{cd.chefs}</p>
                                    </div>
                                    <div className="icons">
                                        <i className={cd.icon3}></i>
                                        <Link to="/" className="social-link">{cd.handle}</Link>
                                    </div>
                                </div>
                           )
                       })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Cities

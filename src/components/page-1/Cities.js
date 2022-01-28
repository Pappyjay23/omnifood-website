import React from 'react'
import { Link } from 'react-router-dom'
import "./Cities.css"
import {CitiesItems} from "./CitiesItems"

function Cities() {
    return (
        <div className="section-cities" id='cities'>
            <div className="container">
                <h1 className="page-title">WE'RE CURRENTLY IN THESE CITIES</h1>
                <div className="cities-grid">
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
                </div>
            </div>
        </div>
    )
}

export default Cities

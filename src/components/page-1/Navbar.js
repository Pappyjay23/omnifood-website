import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {MenuItems} from "./MenuItems"

function Navbar() {
    const [click, setClick] = useState(false)

    const menuClick =()=>{
        setClick(!click)
    }

    const closeNav =()=>{
        setClick(false)
    }



    return (
        <>
            <div className="navbar__container">
                <nav className="navbar">
                    <Link to="/">
                        <img src="./images/logo-white.png" alt="Logo" className="logo" />
                    </Link>
                    <div className="menu__toggler">
                        <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={menuClick}></i>
                    </div>
                    <ul className={click ? "nav-links active" : "nav-links"}>
                        {MenuItems.map((m)=>{
                            return(
                                <li onClick={closeNav}>
                                    <Link className={m.class} to={m.path}>{m.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar

import React from 'react'
import { Link } from "react-scroll";
import "./Button.css"

export const Button =({buttonStyle, buttonSize, onClick, children, path})=>{
    const STYLE = ["btn-full", "btn-ghost"]
    const SIZE = ["btn-medium", "btn-large"]

    const checkStyle = STYLE.includes(buttonStyle) ?  buttonStyle : STYLE[0]
    const checkSize = SIZE.includes(buttonSize) ?  buttonSize : SIZE[0]
    return(
        <Link to={path} spy={true} smooth={true} offset={0} duration={500} className="site-btn">
            <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick}>{children}</button>
        </Link>
    )
}
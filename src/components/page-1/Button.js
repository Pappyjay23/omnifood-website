import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

export const Button =({buttonStyle, buttonSize, onClick, children})=>{
    const STYLE = ["btn-full", "btn-ghost"]
    const SIZE = ["btn-medium", "btn-large"]

    const checkStyle = STYLE.includes(buttonStyle) ?  buttonStyle : STYLE[0]
    const checkSize = SIZE.includes(buttonSize) ?  buttonSize : SIZE[0]
    return(
        <Link to="/" className="site-btn">
            <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick}>{children}</button>
        </Link>
    )
}
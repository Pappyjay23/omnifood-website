import React from 'react'
import { Button } from './Button'

function Card(props) {
    return (
        <div className={props.cname}>
            <div className="top">
                <p className="top-title">{props.title}</p>
                <p className="top-title-desc">{props.desc} <span>{props.small}</span></p>
                <p className="top-desc">{props.price}</p>
            </div>
            <div className="mid">
                <ul>
                    <li><i className="fas fa-check"></i> {props.i1}</li>
                    <li><i className="fas fa-check"></i> {props.i2}</li>
                    <li><i className="fas fa-check"></i> {props.i3}</li>
                    <li><i className="fas fa-check"></i> {props.i4}</li>
                </ul>
            </div>
            <div className="bottom">
                <Button buttonStyle={props.bstyle}>{props.bname}</Button>
            </div>
        </div>
    )
}

export default Card

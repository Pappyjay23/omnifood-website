import React from 'react'
import "./Comments.css"
import {CommentsItems} from "./CommentsItems"

function Comments() {
    return (
        <div className="section-comments">
            <div className="container">
                <h1 className="page-title">OUR CUSTOMERS CAN'T LIVE WITHOUT US</h1>
                <div className="comment-grid">
                    {CommentsItems.map(m=>{
                        return(
                            <div className="comment-items">
                                <span>"</span>
                                <p>{m.comments}</p>
                                <figure>
                                    <img src={m.src} alt={m.name} />
                                    <p>{m.name}</p>
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Comments

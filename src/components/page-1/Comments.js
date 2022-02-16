import React from 'react'
import "./Comments.css"
import {CommentsItems} from "./CommentsItems"
import {motion} from "framer-motion/dist/framer-motion"

function Comments({fade}) {
    return (
        <div className="section-comments">
            <motion.div className="container" viewport={{ once: true }}>
                <motion.h1 initial={{opacity: 0}} whileInView={fade} className="page-title">OUR CUSTOMERS CAN'T LIVE WITHOUT US</motion.h1>
                <motion.div initial={{opacity: 0}} whileInView={fade} className="comment-grid">
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
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Comments

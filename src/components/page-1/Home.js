import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import { Button } from './Button'
import {motion} from "framer-motion/dist/framer-motion"


function Home({fade}) {
    return (
        <div className="section-home" id='home' >
            <Navbar />
            <motion.div className="container" viewport={{ once: true }}>
                <motion.div className="hero__content" initial={{opacity: 0}} whileInView={fade}>
                    <div className="hero__content__details">
                        <h1>GOODBYE JUNK FOOD. <br /> HELLO SUPER HEALTHY MEALS.</h1>
                        <Button path='sign-up' buttonSize="btn-medium" buttonStyle="btn-full">I'm hungry</Button>
                        <Button path='delivery' buttonSize="btn-medium" buttonStyle="btn-ghost">Show me More</Button>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Home

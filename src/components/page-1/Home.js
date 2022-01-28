import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import { Button } from './Button'


function Home() {
    return (
        <div className="section-home" id='home'>
            <Navbar />
            <div className="container">
                <div className="hero__content">
                    <div className="hero__content__details">
                        <h1>GOODBYE JUNK FOOD. <br /> HELLO SUPER HEALTHY MEALS.</h1>
                        <Button path='sign-up' buttonSize="btn-medium" buttonStyle="btn-full">I'm hungry</Button>
                        <Button path='delivery' buttonSize="btn-medium" buttonStyle="btn-ghost">Show me More</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

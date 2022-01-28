import React from 'react'
import { Link } from 'react-router-dom'
import "./Works.css"

function Works() {
    return (
        <div className="section-works">
            <div className="container">
                <h1 className="page-title">HOW IT WORKS - SIMPLE AS 1, 2, 3</h1>
                <div className="grid-items">
                    <div className="grid-item-1">
                        <figure>
                            <img src="./images/app-iPhone.png" alt="Phone App" />
                        </figure>
                    </div>
                    <div className="grid-item-2">
                        <div className="grid-elements-container">
                            <div className="grid-elements">
                                <div className="steps-no">1</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                            </div>
                            <div className="grid-elements">
                                <div className="steps-no">2</div>
                                <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                            </div>
                            <div className="grid-elements">
                                <div className="steps-no">3</div>
                                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                            </div>
                        </div>
                        <div className="download-images">
                            <Link to="/">
                                <figure>
                                    <img src="./images/download-app.svg" alt="App Store" />
                                </figure>
                            </Link>
                            <Link to="/">
                                <figure>
                                    <img src="./images/download-app.svg" alt="App Store" />
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works

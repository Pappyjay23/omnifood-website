import React from 'react'
import "./Delivery.css"
import {motion} from "framer-motion/dist/framer-motion"

function Delivery({fade}) {
    return (
        <div class="section-delivery" id='delivery' >
            <motion.div className="container" viewport={{ once: true }}>
                <motion.div initial={{opacity: 0}} whileInView={fade}>
                    <h1 className="page-title">GET FOOD FAST — NOT FAST FOOD.</h1>
                    <p className="page-desc">Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>  
                </motion.div>
                <motion.div className="grid-items" initial={{opacity: 0}} whileInView={fade}>
                    <div className="grid-item">
                        <i className="fas fa-infinity"></i>
                        <h3>UP TO 365 DAYS/YEAR</h3>
                        <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                    </div>
                    <div className="grid-item">
                        <i className="fas fa-clock"></i>
                        <h3>READY IN 20 MINUTES</h3>
                        <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                    </div>
                    <div className="grid-item">
                        <i className="fas fa-carrot"></i>
                        <h3>100% ORGANIC</h3>
                        <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                    </div>
                    <div className="grid-item">
                        <i className="fas fa-shopping-cart"></i>
                        <h3>ORDER ANYTHING</h3>
                        <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Delivery

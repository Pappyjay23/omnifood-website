import React from 'react'
import "./SignUp.css"
import Card from './Card'
import {motion} from "framer-motion/dist/framer-motion"

function SignUp({fade}) {
    return (
        <div className="section-sign" id='sign-up'>
            <motion.div className="container" viewport={{once: true}}>
                <motion.h1 initial={{opacity: 0}} whileInView={fade} className="page-title">START EATING HEALTHY TODAY</motion.h1>
                <motion.div initial={{opacity: 0}} whileInView={fade} className="sign-grid">
                    <Card title="Premium" desc="399$" small="per month" price="That’s only 13.30$ per meal" i1="1 meal everyday" i2="Order 24/7" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-full" bname="Sign Up Now" cname="sign-card"></Card>
                    <Card title="Pro" desc="149$" small="per month" price="That’s only 14.90$ per meal" i1="1 meal 10days/month" i2="Order 24/7" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-ghost" bname="Sign Up Now" cname="sign-card"></Card>
                    <Card title="Starter" desc="19$" small="per meal" price=" That is 0$" i1="1 meal" i2="Order from 8am to 12pm" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-ghost" bname="Sign Up Now" cname="sign-card trans"></Card>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SignUp

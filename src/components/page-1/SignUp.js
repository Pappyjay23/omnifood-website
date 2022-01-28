import React from 'react'
import "./SignUp.css"
import Card from './Card'

function SignUp() {
    return (
        <div className="section-sign">
            <div className="container">
                <h1 className="page-title">START EATING HEALTHY TODAY</h1>
                <div className="sign-grid">
                    <Card title="Premium" desc="399$" small="per month" price="That’s only 13.30$ per meal" i1="1 meal everyday" i2="Order 24/7" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-full" bname="Sign Up Now" cname="sign-card"></Card>
                    <Card title="Pro" desc="149$" small="per month" price="That’s only 14.90$ per meal" i1="1 meal 10days/month" i2="Order 24/7" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-ghost" bname="Sign Up Now" cname="sign-card"></Card>
                    <Card title="Starter" desc="19$" small="per meal" price=" That is 0$" i1="1 meal" i2="Order from 8am to 12pm" i3="Access to newest creations" i4="Free Delivery" bstyle="btn-ghost" bname="Sign Up Now" cname="sign-card trans"></Card>
                </div>
            </div>
        </div>
    )
}

export default SignUp

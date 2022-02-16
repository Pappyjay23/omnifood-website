import React from 'react'
import Cities from "./page-1/Cities"
import Comments from './page-1/Comments'
import Contact from './page-1/Contact'
import Delivery from './page-1/Delivery'
import Footer from './page-1/Footer'
import Gallery from './page-1/Gallery'
import Home from './page-1/Home'
import SignUp from './page-1/SignUp'
import Works from './page-1/Works'

function Page() {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1
        }
    }
    return (
        <div>
            <Home fade={fade} />
            <Delivery fade={fade} />
            <Gallery fade={fade} />
            <Works fade={fade} />
            <Cities fade={fade} />
            <Comments fade={fade} />
            <SignUp fade={fade} />
            <Contact fade={fade} />
            <Footer />

        </div>
    )
}

export default Page

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
    return (
        <div>
            <Home />
            <Delivery />
            <Gallery />
            <Works />
            <Cities />
            <Comments />
            <SignUp />
            <Contact />
            <Footer />

        </div>
    )
}

export default Page

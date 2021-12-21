
import Navbar from "../layout/Navbar"
import Hero from "../layout/Hero"
import TestimonialIntro from "../layout/TestimonialIntro"
import Footer from "../layout/Footer"
import TestimonialContainer from "../layout/TestimonialContainer"
import VendorTestimonial from "../layout/VendorTestimonial"
import UserTestimonialContainer from "../layout/UserTestimonialContainer"
import { useContext } from "react"
import TestimonyContext from "../context/TestimonyContext"
import AddTestimonial from "./AddTestimonial"
import ThankYou from "./ThankYou"



const Home = () => {

const {modal, greeting} = useContext(TestimonyContext) 

    if(modal || greeting) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <>
        {modal && <AddTestimonial/>}
        {greeting && <ThankYou/>}
            <Navbar />
            <Hero />
            <TestimonialIntro />
            <TestimonialContainer />
            <VendorTestimonial/>
            <UserTestimonialContainer/>
            <Footer />
        </>
    )
}

export default Home

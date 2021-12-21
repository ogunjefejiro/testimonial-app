
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



const Home = () => {

const {modal} = useContext(TestimonyContext) 

    if(modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    
    return (
        <>

            <Navbar />
            <Hero />
            <TestimonialIntro />
            <TestimonialContainer />
            {modal && <AddTestimonial/>}
            <VendorTestimonial/>
            <UserTestimonialContainer/>
            <Footer />
        </>
    )
}

export default Home

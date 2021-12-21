
import Navbar from "../layout/Navbar"
import Hero from "../layout/Hero"
import TestimonialIntro from "../layout/TestimonialIntro"
import Footer from "../layout/Footer"
import TestimonialContainer from "../layout/TestimonialContainer"
import VendorTestimonial from "../layout/VendorTestimonial"
import UserTestimonialContainer from "../layout/UserTestimonialContainer"


const Home = () => {
    return (
        <>
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

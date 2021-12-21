import girls from "../assets/girls.png"
import { useContext } from "react"
import TestimonyContext from "../context/TestimonyContext"

const TestimonialIntro = () => {

    const {openModal} = useContext(TestimonyContext)
    return (
        <div className="intro-test">
            <div className="container intro">
            <img src={girls} alt="" />
            <div>
                <h2>Tolu & Joy’s Experience</h2>
                <p className="badge">customer</p>
                <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <button className="cta" onClick={openModal}>Share your own story!</button>
            </div>
            </div>
            
        </div>
    )
}

export default TestimonialIntro

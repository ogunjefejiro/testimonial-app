import woman from "../assets/woman.png"
import { useContext } from "react"
import TestimonyContext from "../context/TestimonyContext"

const VendorTestimonial = () => {
    const {openModal} = useContext(TestimonyContext)

    return (
        <div className="vendor-test">
            <div className="container intro">
            <div>
                <h2>Tolu & Joy’s Experience</h2>
                <p className="badge">vendor</p>
                <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <button className="cta" onClick={openModal}>Share your own story!</button>
            </div>
            <img src={woman} alt="woman holding a bag" />
            </div>
            
        </div>
    )
}

export default VendorTestimonial

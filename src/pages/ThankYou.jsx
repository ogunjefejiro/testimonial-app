import Card from "../components/Card"
import flower from ".././assets/flower.svg"
import { useContext } from "react"
import TestimonyContext from "../context/TestimonyContext"

const ThankYou = () => {
    const {closeGreeting} = useContext(TestimonyContext)

    return (
        <Card className="thanks">
            <div className="thanks">
                <img src={flower} alt="" />
                <h1>Thank you for <br></br> sharing your story!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="btn" onClick={closeGreeting}>Close</button>
            </div>
        </Card>
    )
}

export default ThankYou

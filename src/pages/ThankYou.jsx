import Card from "../components/Card"
import flower from ".././assets/flower.svg"
import { Link } from "react-router-dom"

const ThankYou = () => {
    return (
        <Card className="thanks">
            <div className="thanks">
                <img src={flower} alt="" />
                <h1>Thank you for <br></br> sharing your story!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/" className="btn">Close</Link>
            </div>
        </Card>
    )
}

export default ThankYou

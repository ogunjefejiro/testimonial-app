import Card from "../components/Card"
import {FaPaperclip} from "react-icons/fa"
import { Link } from "react-router-dom" 

const AddTestimonial = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Card>
            <h1>Share your amazing story!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Upload your picture</label>
                <div className="two-cols attachment form-input">
                    <input type="file" name="image" id="image" />
                    <FaPaperclip/>
                </div>
                <div className="two-cols">
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="" className="form-input" />
                    </div>
                </div>
                <div className="one-col">
                    <label htmlFor="">Share your story</label>
                    <textarea rows="5"  />
                </div>
                <div className="radio">
                    <p>What did you interact with Vasiti as?</p> 
                    <div>
                        <input type="radio" name="customer" value="customer" id="" checked/>Customer
                        <input type="radio" name="customer" value="vendor" id="" />Vendor
                    </div>
                </div>
                <div className="submit">
                    <button type="submit" className="btn"><Link to="/thanks" className="btn">Share your story</Link></button>
                </div>
                
            </form>
        </Card>
    )
}

export default AddTestimonial

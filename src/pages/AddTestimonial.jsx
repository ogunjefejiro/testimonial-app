import Card from "../components/Card"
import {FaPaperclip} from "react-icons/fa"
import { useContext, useState } from "react"
import TestimonyContext from "../context/TestimonyContext"
import DataContext from "../context/DataContext"

const AddTestimonial = () => {
    const [avatar, setAvatar] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [type, setType] = useState("")
    const [text, setText] = useState("")
    
    const {openGreeting} = useContext(TestimonyContext)
    const {addTestimony} = useContext(DataContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        openGreeting()

        addTestimony({avatar,firstName,lastName,city,type,text})
    }

    const handleChange = (e) => {
        setType(e.currentTarget.value)
    }

    return (
        <Card>
            <h1>Share your amazing story!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Upload your picture</label>
                <div className="two-cols attachment form-input">
                    <input type="file"  />
                    <FaPaperclip/>
                </div>
                <div className="two-cols">
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" />
                    </div>
                </div>
                <div className="one-col">
                    <label htmlFor="">Share your story</label>
                    <textarea rows="3" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="radio">
                    <p>What did you interact with Vasiti as?</p> 
                    <div>
                        <input type="radio" name="customer" value="customer" id="" checked={type === "customer"} onChange={handleChange}/>Customer
                        <input type="radio" name="customer" value="vendor" id="" checked={type === "vendor"} onChange={handleChange} />Vendor
                    </div>
                </div>
                <div className="one-col">
                    <label htmlFor="">City or Higher Institution (for Students)</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-input" />
                </div>
                <div className="submit">
                    <button type="submit" className="btn">Share your story</button>
                </div>
                
            </form>
        </Card>
    )
}

export default AddTestimonial

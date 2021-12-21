import people from "../assets/people.png"

const Hero = () => {
    return (
        <div className="hero container">
            <div>
                <h1>Amazing<br></br> Experiences from Our<br></br> Wonderful Customers</h1>
                <p>Here is what customers and vendors are saying about<br></br> us, you can share your stories with us too.</p>
            </div>
            <img src={people} alt="" />
        </div>
    )
}

export default Hero

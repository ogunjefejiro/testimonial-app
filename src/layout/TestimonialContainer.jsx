import Testimony from "./Testimony"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const TestimonialContainer = () => {
    const {testimononial} = useContext(DataContext)
    return (
        <div className="testimony-container container">
            {testimononial.map((testimony) => <Testimony key={testimony.id} testimony={testimony}/>)}
        </div>
    )
}

export default TestimonialContainer

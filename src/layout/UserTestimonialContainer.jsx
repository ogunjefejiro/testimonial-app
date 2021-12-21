import Testimony from "./Testimony"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const UserTestimonialContainer = () => {
    const {testimony} = useContext(DataContext)
    return (
        <div className="testimony-container container">
            {testimony.map((testimony) => <Testimony key={testimony.id} testimony={testimony}/>)}
        </div>
    )
}

export default UserTestimonialContainer

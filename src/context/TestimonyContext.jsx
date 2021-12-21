import { createContext, useState } from "react"
import Testimony from "../layout/Testimony"

const TestimonyContext = createContext()

export const TestimonyProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    return <TestimonyContext.Provider value={{

    }}>

    </TestimonyContext.Provider>
}
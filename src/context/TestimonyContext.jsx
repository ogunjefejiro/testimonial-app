import { createContext, useState } from "react"
import Testimony from "../layout/Testimony"


const TestimonyContext = createContext()

export const TestimonyProvider = ({children}) => {
    const images = require.context("../assets")

    const [modal, setModal] = useState(false)
    const [greeting, setGreeting] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const openGreeting = () => {
        setModal(false)
        setGreeting(true)
    }
    const closeGreeting = () => {
        setModal(false)
        setGreeting(false)
    }

    return <TestimonyContext.Provider value={{
        modal,
        greeting,
        openModal,
        closeModal,
        openGreeting,
        closeGreeting

    }}>
        {children}
    </TestimonyContext.Provider>
}


export default TestimonyContext
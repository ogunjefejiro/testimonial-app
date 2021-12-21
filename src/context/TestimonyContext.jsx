import { createContext, useState } from "react"
import Testimony from "../layout/Testimony"

const TestimonyContext = createContext()

export const TestimonyProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return <TestimonyContext.Provider value={{
        modal,
        openModal,
        closeModal

    }}>
        {children}
    </TestimonyContext.Provider>
}


export default TestimonyContext
import { createContext, useState } from 'react'

const PositionFormContext = createContext()

const PositionFormProvider = ({ children }) => {
    const [isCloseForm, setIsCloseForm] = useState(true)

    const handleCloseForm = () => setIsCloseForm(!isCloseForm)

    const value = {
        isCloseForm,
        handleCloseForm,
    }

    return <PositionFormContext.Provider value={value}>{children}</PositionFormContext.Provider>
}

export { PositionFormContext, PositionFormProvider }
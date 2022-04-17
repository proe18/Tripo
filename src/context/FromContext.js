import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormContext = createContext()

const FormProvider = ({ children }) => {
    const [isCloseForm, setIsCloseForm] = useState(true)

    const handleCloseForm = () => setIsCloseForm(!isCloseForm)
    const { register, formState: { errors }, reset, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data);
        reset()
    }

    const value = {
        isCloseForm,
        errors,
        register,
        reset,
        handleSubmit,
        handleCloseForm,
        onSubmit,
    }

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export { FormContext, FormProvider }
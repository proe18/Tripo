import { createContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormContext = createContext()

const FormProvider = ({ children }) => {
    const [isCloseForm, setIsCloseForm] = useState(true)

    const handleCloseForm = () => setIsCloseForm(!isCloseForm)
    const { register, formState: { errors }, reset, clearErrors, handleSubmit } = useForm()

    const registerOptions  = {
        firstName: {
            required: 'Please fill in this field',
            minLength: {
                value: 3,
                message: 'Must have at least 3 characters'
            },
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Only characters in the alphabet'
            }
        },
        lastName: {
            required: 'Please fill in this field',
            minLength: {
                value: 3,
                message: 'Must have at least 3 characters'
            },
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Only characters in the alphabet'
            }
        },
        email: {
            required: 'Please fill in this field',
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email'
            }
        },
        phone: {
            minLength: {
                value: 4,
                message: 'Must have at least 4 characters'
            },
            maxLength: {
                value: 20,
                message: 'Max 20 characters'
            },
            pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: 'Invalid phone number'
            }
        },
        position: {
            required: 'Please select an item from the list',
        },
        url: {
            required: 'Please fill in this field',
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm,
                message: 'Invalid URL'
            }
        },
        linkedUrl: {
            pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm,
                message: 'Invalid URL'
            }
        },

    }
    const onSubmit = data => {
        console.log(data);
        reset()
    }

    //clear errors if user close form
    useEffect(() => {
        const timerID = setTimeout(() => {
            if (isCloseForm) clearErrors()
        }, 500)

        return () => {
            clearTimeout(timerID)
        }
    }, [isCloseForm, clearErrors])
    //========================================

    const value = {
        isCloseForm,
        registerOptions,
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
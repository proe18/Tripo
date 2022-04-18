import { useContext, memo } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import { FormContext } from '../../context/FromContext'
import {
    SubscribeFormContainer,
    FormWrapper,
    FormHeading,
    FormTitle,
    Form,
    FormWrap,
    FormLabel,
    FormInput,
    ErrorWrap,
    ErrorMes,
    ButtonJoin
} from './FormStyled'

const SubscribeForm = () => {
    const { registerOptions } = useContext(FormContext)

    const { register, formState: { errors }, reset, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <SubscribeFormContainer>
            <FormWrapper>
                <FormHeading>
                    <FormTitle>Subscribe to Our Newsletter</FormTitle>
                </FormHeading>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Email *</FormLabel>
                    <FormWrap>
                        <FormInput
                            type={'email'}
                            errorMessage={errors.email}
                            {...register('email', registerOptions.email)}
                        />
                        {errors?.email &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>{errors.email.message}</ErrorMes>
                            </ErrorWrap>
                        }
                        <ButtonJoin>Join</ButtonJoin>
                    </FormWrap>
                </Form>
            </FormWrapper>
        </SubscribeFormContainer>
    )
}

export default memo(SubscribeForm)
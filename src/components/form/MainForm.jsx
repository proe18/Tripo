import { useContext, memo } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext, NavbarContext } from '../../context'
import { AiOutlineWarning } from 'react-icons/ai'
import {
    Container,
    FormWrapper,
    FormGroup,
    FormHeading,
    FormTitle,
    FormText,
    Form,
    FormWrap,
    FormLabel,
    FormInput,
    FormTextArea,
    ErrorWrap,
    ErrorMes,
    ButtonSubmit,
} from './FormStyled'

const MainForm = () => {
    const { contactElement } = useContext(NavbarContext)
    const { registerOptions } = useContext(FormContext)

    const { register, formState: { errors }, reset, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <Container ref={contactElement}>
            <FormWrapper>
                <FormHeading>
                    <FormTitle>Get in Touch</FormTitle>
                    <FormText>I'm a paragraph. Click here to add your own text and edit me.</FormText>
                </FormHeading>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <FormWrap>
                            <FormLabel>First Name *</FormLabel>
                            <FormInput
                                type={'text'}
                                errorMessage={errors.firstName}
                                {...register('firstName', registerOptions.firstName)}
                            />
                            {errors?.firstName &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>{errors.firstName.message}</ErrorMes>
                                </ErrorWrap>
                            }
                        </FormWrap>
                        <FormWrap>
                            <FormLabel>Last Name *</FormLabel>
                            <FormInput
                                type={'text'}
                                errorMessage={errors.lastName}
                                {...register('lastName', registerOptions.lastName)}
                            />
                            {errors?.lastName &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>{errors.lastName.message}</ErrorMes>
                                </ErrorWrap>
                            }
                        </FormWrap>
                    </FormGroup>
                    <FormWrap>
                        <FormLabel>Email *</FormLabel>
                        <FormInput
                            type={'text'}
                            errorMessage={errors.email}
                            {...register('email', registerOptions.email)}
                        />
                        {errors?.email &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>{errors.email.message}</ErrorMes>
                            </ErrorWrap>
                        }
                    </FormWrap>
                    <FormWrap>
                        <FormLabel>Leave us a message...</FormLabel>
                        <FormTextArea type={'text'} />
                    </FormWrap>
                    <ButtonSubmit>Submit</ButtonSubmit>
                </Form>
            </FormWrapper>
        </Container>
    )
}

export default memo(MainForm)
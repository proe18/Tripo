import { useContext } from 'react'
import { NavbarContext } from '../../context'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import {
    Container,
    SubscribeFormContainer,
    FormWrapper,
    FormGroup,
    FormHeading,
    FormTitle,
    FormText,
    Form,
    FormWrap,
    FormLabel,
    FormInput,
    ErrorWrap,
    ErrorMes,
    ButtonSubmit,
    ButtonJoin
} from './FormStyled'

export const FormContainer = () => {
    const { contactElement } = useContext(NavbarContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data, e) => console.log(data, e)

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
                            <FormInput type={'text'} {...register('firstName', {
                                required: true,
                                minLength: 3,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })} />
                            {errors.firstName?.type === "required" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Vui lòng điền vào trường này</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.firstName?.type === "minLength" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Tối thiểu 3 ký tự</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.firstName?.type === "maxLength" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Tối đa 20 ký tự</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.firstName?.type === "pattern" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Chỉ các ký tự trong bảng chữ cái</ErrorMes>
                                </ErrorWrap>
                            }
                        </FormWrap>
                        <FormWrap>
                            <FormLabel>Last Name *</FormLabel>
                            <FormInput type={'text'} {...register('lastName', {
                                required: true,
                                minLength: 3,
                                maxLength: 30,
                                pattern: /^[A-Za-z]+$/i
                            })} />
                            {errors.lastName?.type === "required" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Vui lòng điền vào trường này</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.lastName?.type === "minLength" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Tối thiểu 3 ký tự</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.lastName?.type === "maxLength" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Tối đa 20 ký tự</ErrorMes>
                                </ErrorWrap>
                            }
                            {errors.lastName?.type === "pattern" &&
                                <ErrorWrap>
                                    <AiOutlineWarning />
                                    <ErrorMes>Chỉ các ký tự trong bảng chữ cái</ErrorMes>
                                </ErrorWrap>
                            }
                        </FormWrap>
                    </FormGroup>
                    <FormWrap>
                        <FormLabel>Email *</FormLabel>
                        <FormInput type={'text'} {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                        {errors.email?.type === "required" &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>Vui lòng điền vào trường này</ErrorMes>
                            </ErrorWrap>
                        }
                        {errors.email?.type === "pattern" &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>Email không hợp lệ</ErrorMes>
                            </ErrorWrap>
                        }
                    </FormWrap>
                    <FormWrap>
                        <FormLabel>Leave us a message...</FormLabel>
                        <FormInput type={'text'} />
                    </FormWrap>
                    <ButtonSubmit>Submit</ButtonSubmit>
                </Form>
            </FormWrapper>
        </Container>
    )
}

export const SubscribeForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data, e) => console.log(data, e)

    return (
        <SubscribeFormContainer>
            <FormWrapper>
                <FormHeading>
                    <FormTitle>Subscribe to Our Newsletter</FormTitle>
                </FormHeading>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Email *</FormLabel>
                    <FormWrap>
                        <FormInput type={'email'} {...register('email', {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                        {errors.email?.type === "required" &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>Vui lòng điền vào trường này</ErrorMes>
                            </ErrorWrap>
                        }
                        {errors.email?.type === "pattern" &&
                            <ErrorWrap>
                                <AiOutlineWarning />
                                <ErrorMes>Email không hợp lệ</ErrorMes>
                            </ErrorWrap>
                        }
                        <ButtonJoin>Join</ButtonJoin>
                    </FormWrap>
                </Form>
            </FormWrapper>
        </SubscribeFormContainer>
    )
}
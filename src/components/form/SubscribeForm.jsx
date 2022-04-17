import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
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

export default memo(SubscribeForm)
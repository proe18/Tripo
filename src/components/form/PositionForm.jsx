import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineWarning } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { PositionFormContext } from '../../context'
import {
    PositionFormContainer,
    Modal,
    Container,
    FormWrapper,
    FormHeading,
    FormTitle,
    FormText,
    FormIcon,
    FormGroup,
    Form,
    FormContainer,
    FormWrap,
    FormLabel,
    FormInput,
    FormSelect,
    FormOption,
    ErrorWrap,
    ErrorMes,
    FormButton,
    ButtonSubmit
} from './PositionFormStyled'

const PositionForm = () => {
    const { isCloseForm, handleCloseForm} = useContext(PositionFormContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data, e) => console.log(data, e)

    return (
        <PositionFormContainer>
            <Modal onClick={handleCloseForm} hideModal={isCloseForm}></Modal>
            <Container hideForm={isCloseForm}>
                <FormWrapper>
                    <FormGroup>
                        <FormHeading>
                            <FormTitle>Join Our Team</FormTitle>
                            <FormText>Submit Your Application</FormText>
                        </FormHeading>
                        <FormIcon onClick={handleCloseForm}>
                            <GrClose />
                        </FormIcon>
                    </FormGroup>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormContainer>
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
                                        maxLength: 20,
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
                            <FormGroup>
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
                                    <FormLabel>Phone</FormLabel>
                                    <FormInput type={'text'} {...register('phone', {
                                        minLength: 4,
                                        maxLength: 17,
                                        pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
                                    })} />
                                    {errors.phone?.type === "minLength" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Tối thiểu 4 ký tự</ErrorMes>
                                        </ErrorWrap>
                                    }
                                    {errors.phone?.type === "maxLength" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Tối đa 17 ký tự</ErrorMes>
                                        </ErrorWrap>
                                    }
                                    {errors.phone?.type === "pattern" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Vui lòng nhập đúng</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                            </FormGroup>
                            <FormWrap>
                                <FormLabel>Position *</FormLabel>
                                <FormSelect value={''} {...register('position', { required: true })}>
                                    <FormOption value={'CommunityManager'}>Community Manager</FormOption>
                                    <FormOption value={'QA Tester'}>QA Tester</FormOption>
                                    <FormOption value={'Game Designer'}>Game Designer</FormOption>
                                    <FormOption value={'Game Developer'}>Game Developer</FormOption>
                                </FormSelect>
                                {errors.position?.type === "required" &&
                                    <ErrorWrap>
                                        <AiOutlineWarning />
                                        <ErrorMes>Vui lòng chọn một mục trong danh sách</ErrorMes>
                                    </ErrorWrap>
                                }
                            </FormWrap>
                            <FormGroup>
                                <FormWrap>
                                    <FormLabel>CV URL *</FormLabel>
                                    <FormInput type={'text'} {...register('url', {
                                        required: true,
                                        pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm
                                    })} />
                                    {errors.url?.type === "required" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Vui lòng điền vào trường này</ErrorMes>
                                        </ErrorWrap>
                                    }
                                    {errors.url?.type === "pattern" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Vui lòng nhập URL</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                                <FormWrap>
                                    <FormLabel>LinkedIn URL</FormLabel>
                                    <FormInput type={'text'} {...register('linkedurl', {
                                        pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm
                                    })} />
                                    {errors.linkedurl?.type === "pattern" &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>Vui lòng nhập URL</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                            </FormGroup>
                            <FormWrap>
                                <FormLabel>Any Comments</FormLabel>
                                <FormInput type={'text'} />
                            </FormWrap>
                            <FormButton>
                                <ButtonSubmit>Submit</ButtonSubmit>
                            </FormButton>
                        </FormContainer>
                    </Form>
                </FormWrapper>
            </Container>
        </PositionFormContainer>
    )
}

export default PositionForm
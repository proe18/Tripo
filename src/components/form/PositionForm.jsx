import { useContext, memo } from 'react'
import { AiOutlineWarning } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { FormContext } from '../../context'
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
    FormTextArea,
    FormSelect,
    FormOption,
    ErrorWrap,
    ErrorMes,
    FormButton,
    ButtonSubmit
} from './PositionFormStyled'

const PositionForm = () => {
    const {
        isCloseForm,
        registerOptions,
        register,
        errors,
        handleSubmit,
        handleCloseForm,
        onSubmit,
    } = useContext(FormContext)

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
                            <FormGroup>
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
                                    <FormLabel>Phone</FormLabel>
                                    <FormInput
                                        type={'text'}
                                        errorMessage={errors.phone}
                                        {...register('phone', registerOptions.phone)}
                                    />
                                    {errors?.phone &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>{errors.phone.message}</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                            </FormGroup>
                            <FormWrap>
                                <FormLabel>Position *</FormLabel>
                                <FormSelect
                                    errorMessage={errors.position}
                                    {...register('position', registerOptions.position)}
                                >
                                    <FormOption value={''} hidden></FormOption>
                                    <FormOption value={'CommunityManager'}>Community Manager</FormOption>
                                    <FormOption value={'QA Tester'}>QA Tester</FormOption>
                                    <FormOption value={'Game Designer'}>Game Designer</FormOption>
                                    <FormOption value={'Game Developer'}>Game Developer</FormOption>
                                </FormSelect>
                                {errors?.position &&
                                    <ErrorWrap>
                                        <AiOutlineWarning />
                                        <ErrorMes>{errors.position.message}</ErrorMes>
                                    </ErrorWrap>
                                }
                            </FormWrap>
                            <FormGroup>
                                <FormWrap>
                                    <FormLabel>CV URL *</FormLabel>
                                    <FormInput
                                        type={'text'}
                                        errorMessage={errors.url}
                                        {...register('url', registerOptions.url)}
                                    />
                                    {errors?.url &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>{errors.url.message}</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                                <FormWrap>
                                    <FormLabel>LinkedIn URL</FormLabel>
                                    <FormInput
                                        type={'text'}
                                        errorMessage={errors.linkedUrl}
                                        {...register('linkedurl', registerOptions.linkedUrl)}
                                    />
                                    {errors?.linkedUrl &&
                                        <ErrorWrap>
                                            <AiOutlineWarning />
                                            <ErrorMes>{errors.linkedUrl.message}</ErrorMes>
                                        </ErrorWrap>
                                    }
                                </FormWrap>
                            </FormGroup>
                            <FormWrap>
                                <FormLabel>Any Comments</FormLabel>
                                <FormTextArea type={'text'} {...register('comments')} />
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

export default memo(PositionForm)
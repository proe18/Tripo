import { useContext } from 'react'
import { NavbarContext, FormContext, ScrollContext } from '../../context'
import { Button, ButtonLink, JobsPosition } from '../../components'

const JobsPositionContainer = ({ data }) => {
    const { handleCloseForm } = useContext(FormContext)
    const { careersJobTitle, careersSend, careersListJob, activeElement } = useContext(ScrollContext)
    const { handleSwitchPage } = useContext(NavbarContext)

    return (
        <JobsPosition>
            <JobsPosition.Wrapper>
                <JobsPosition.Title
                    ref={careersJobTitle}
                    active={activeElement?.title}
                >
                    {data.title}
                </JobsPosition.Title>
                <JobsPosition.ListJob ref={careersListJob} active={activeElement?.listJob}>
                    {data.jobs.map(job =>
                        <JobsPosition.Position key={job.title}>
                            <JobsPosition.Wrap to={job.path}>
                                <JobsPosition.Image src={job.img} alt={job.title} />
                            </JobsPosition.Wrap>
                            <JobsPosition.Content>
                                <JobsPosition.Title>{job.title}</JobsPosition.Title>
                                <JobsPosition.Place>{job.place}</JobsPosition.Place>
                                <JobsPosition.Text>{job.text}</JobsPosition.Text>
                            </JobsPosition.Content>
                            <ButtonLink to={job.path} onClick={() => handleSwitchPage()}>
                                <JobsPosition.Overlay>{job.button}</JobsPosition.Overlay>
                            </ButtonLink>
                        </JobsPosition.Position>
                    )}
                </JobsPosition.ListJob>
                <JobsPosition.Send>
                    <JobsPosition.Overlay>
                        <JobsPosition.Group ref={careersSend} active={activeElement?.send}>
                            <JobsPosition.SubTitle>{data.sendCV.subTitle}</JobsPosition.SubTitle>
                            <JobsPosition.Title>{data.sendCV.title}</JobsPosition.Title>
                            <Button onClick={handleCloseForm}>{data.sendCV.button}</Button>
                        </JobsPosition.Group>
                    </JobsPosition.Overlay>
                </JobsPosition.Send>
            </JobsPosition.Wrapper>
        </JobsPosition>
    )
}

export default JobsPositionContainer
import { useContext } from 'react'
import { NavbarContext, FormContext, ScrollContext } from '../../context'
import { Button, ButtonLink, JobsPosition } from '../../components'
import * as ROUTES from '../../constants/routes'
import * as PAGESTITLE from '../../constants/pages_title'

const JobsPositionContainer = ({ data }) => {
    const { handleCloseForm } = useContext(FormContext)
    const { careersJobTitle, careersSend, careersListJob, activeElement } = useContext(ScrollContext)
    const { handleSwitchPage } = useContext(NavbarContext)

    const selectPath = title => {
        switch (title) {
            case PAGESTITLE.MANAGER:
                return ROUTES.MANAGER
            case PAGESTITLE.TESTER:
                return ROUTES.TESTER
            case PAGESTITLE.DESIGNER:
                return ROUTES.DESIGNER
            case PAGESTITLE.DEVELOPER:
                return ROUTES.DEVELOPER
            default: return
        }
    }

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
                            <JobsPosition.Wrap to={selectPath(job.title)}>
                                <JobsPosition.Image src={job.img} alt={job.title} />
                            </JobsPosition.Wrap>
                            <JobsPosition.Content>
                                <JobsPosition.Title>{job.title}</JobsPosition.Title>
                                <JobsPosition.Place>{job.place}</JobsPosition.Place>
                                <JobsPosition.Text>{job.text}</JobsPosition.Text>
                            </JobsPosition.Content>
                            <ButtonLink to={selectPath(job.title)} onClick={() => handleSwitchPage()}>
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
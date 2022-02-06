import { ButtonLink, JobsPosition } from '../../components'

const JobsPositionContainer = ({ data }) => {
    return (
        <JobsPosition>
            <JobsPosition.Wrapper>
                <JobsPosition.Title>Job Openings</JobsPosition.Title>
                <JobsPosition.ListJob>
                    {data.map(job =>
                        <JobsPosition.Position key={job.title}>
                            <JobsPosition.Wrap to={job.path}>
                                <JobsPosition.Image src={job.img} alt={job.title} />
                            </JobsPosition.Wrap>
                            <JobsPosition.Content>
                                <JobsPosition.Title>{job.title}</JobsPosition.Title>
                                <JobsPosition.Place>{job.place}</JobsPosition.Place>
                                <JobsPosition.Text>{job.text}</JobsPosition.Text>
                            </JobsPosition.Content>
                            <ButtonLink to={job.path}>
                                <JobsPosition.Overlay>{job.button}</JobsPosition.Overlay>
                            </ButtonLink>
                        </JobsPosition.Position>
                    )}
                </JobsPosition.ListJob>
            </JobsPosition.Wrapper>
        </JobsPosition>
    )
}

export default JobsPositionContainer
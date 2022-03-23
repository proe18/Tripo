import { useContext } from 'react'
import { ButtonLink, JoinTeam, FormContainer, SubscribeForm } from '../../components'
import { ScrollContext } from '../../context'

const JoinTeamContainer = ({ data }) => {
    const { homeJoinTeamHeading, imageJoinTeam } = useContext(ScrollContext)

    return (
        <JoinTeam>
            {data.background.map((bg, index) => <JoinTeam.Background key={index} bg={bg} />)}
            <JoinTeam.Wrapper>
                <JoinTeam.Group>
                    <JoinTeam.Heading ref={homeJoinTeamHeading}>
                        <JoinTeam.Title>{data.title}</JoinTeam.Title>
                        <JoinTeam.Text>{data.text}</JoinTeam.Text>
                        <ButtonLink to={data.path}>{data.name}</ButtonLink>
                    </JoinTeam.Heading>
                    <JoinTeam.Image src={data.img} alt='' ref={imageJoinTeam}/>
                </JoinTeam.Group>
            </JoinTeam.Wrapper>
            <JoinTeam.Overlay>
                <JoinTeam.Wrapper>
                    <JoinTeam.Group>
                        <FormContainer />
                        <SubscribeForm />
                    </JoinTeam.Group>
                </JoinTeam.Wrapper>
            </JoinTeam.Overlay>
        </JoinTeam>
    )
}

export default JoinTeamContainer
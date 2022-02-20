import { ButtonLink, JoinTeam, FormContainer, SubscribeForm } from '../../components'

const JoinTeamContainer = ({ data }) => {
    return (
        <JoinTeam>
            {data.background.map((bg, index) => <JoinTeam.Background key={index} bg={bg} />)}
            <JoinTeam.Wrapper>
                <JoinTeam.Group>
                    <JoinTeam.Heading>
                        <JoinTeam.Title>{data.title}</JoinTeam.Title>
                        <JoinTeam.Text>{data.text}</JoinTeam.Text>
                        <ButtonLink to={data.path}>{data.name}</ButtonLink>
                    </JoinTeam.Heading>
                    <JoinTeam.Image src={data.img} alt='' />
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
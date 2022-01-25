import { ButtonLink, JoinTeam } from '../../components'

const JoinTeamContainer = ({data}) => {
    console.log(data.background);
    return (
        <JoinTeam>
            {data.background.map((bg, index) => <JoinTeam.Background key={index} bg={bg}/>)}
            <JoinTeam.Wrapper>
                <JoinTeam.Heading>
                    <JoinTeam.Title>{data.title}</JoinTeam.Title>
                    <JoinTeam.Text>{data.text}</JoinTeam.Text>
                    <ButtonLink to={data.path}>{data.name}</ButtonLink>
                </JoinTeam.Heading>
                <JoinTeam.Image src={data.img} alt=''/>
            </JoinTeam.Wrapper>
        </JoinTeam>
    )
}

export default JoinTeamContainer
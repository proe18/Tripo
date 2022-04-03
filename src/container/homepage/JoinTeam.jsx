import { useContext } from 'react'
import { ButtonLink, JoinTeam, FormContainer, SubscribeForm } from '../../components'
import { ScrollContext } from '../../context'

const JoinTeamContainer = ({ data }) => {
    const {
        homeJoinTeamHeading,
        imageJoinTeam,
        heightImage,
        activeElement
    } = useContext(ScrollContext)
    console.log(heightImage);

    return (
        <JoinTeam>
            <JoinTeam.Background>
                <JoinTeam.Wrapper>
                    <JoinTeam.Group active={activeElement?.imageJoinTeam} heightElement={heightImage}>
                        <JoinTeam.Heading ref={homeJoinTeamHeading} active={activeElement?.joinTeam}>
                            <JoinTeam.Title>{data.title}</JoinTeam.Title>
                            <JoinTeam.Text>{data.text}</JoinTeam.Text>
                            <ButtonLink to={data.path}>{data.name}</ButtonLink>
                        </JoinTeam.Heading>
                        <JoinTeam.Image
                            src={data.img}
                            alt=''
                            ref={imageJoinTeam}
                        />
                    </JoinTeam.Group>
                </JoinTeam.Wrapper>
            </JoinTeam.Background>
            <JoinTeam.Background>
                <JoinTeam.Overlay>
                    <JoinTeam.Wrapper>
                        <JoinTeam.Group>
                            <FormContainer />
                            <SubscribeForm />
                        </JoinTeam.Group>
                    </JoinTeam.Wrapper>
                </JoinTeam.Overlay>
            </JoinTeam.Background>
        </JoinTeam>
    )
}

export default JoinTeamContainer
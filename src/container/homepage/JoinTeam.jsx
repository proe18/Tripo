import { useContext } from 'react'
import { ButtonLink, JoinTeam, FormContainer, SubscribeForm } from '../../components'
import { ScrollContext } from '../../context'

const JoinTeamContainer = ({ data }) => {
    const {
        homeJoinTeamHeading,
        imageJoinTeam,
        marginJoinTeam,
        heightImage,
        activeElement
    } = useContext(ScrollContext)

    return (
        <JoinTeam marginTop={marginJoinTeam}>
            <JoinTeam.Background>
                <JoinTeam.Wrapper>
                    <JoinTeam.Group active={activeElement?.imageJoinTeam} heightImage={heightImage}>
                        <JoinTeam.Heading ref={homeJoinTeamHeading} active={activeElement?.joinTeam}>
                            <JoinTeam.Title>{data.title}</JoinTeam.Title>
                            <JoinTeam.Text>{data.text}</JoinTeam.Text>
                            <ButtonLink to={data.path}>{data.name}</ButtonLink>
                        </JoinTeam.Heading>
                        <JoinTeam.Wrap>
                            <JoinTeam.Image
                                src={data.img}
                                alt=''
                                ref={imageJoinTeam}
                            />
                        </JoinTeam.Wrap>
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
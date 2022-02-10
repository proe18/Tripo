import { HeaderGames } from '../../components'

const HeaderContainer = ({ data }) => {
    return (
        <HeaderGames>
            <HeaderGames.Background bg={data.bg} />
            <HeaderGames.Wrapper>
                <HeaderGames.Box>
                    <HeaderGames.Group>
                        <HeaderGames.Info>
                            <HeaderGames.Wrap>
                                <HeaderGames.Image src={data.avatar} alt={data.alt} />
                            </HeaderGames.Wrap>
                            <HeaderGames.Heading>
                                <HeaderGames.Title>{data.title}</HeaderGames.Title>
                                <HeaderGames.SubTitle>{data.subTitle}</HeaderGames.SubTitle>
                            </HeaderGames.Heading>
                        </HeaderGames.Info>
                        <HeaderGames.Content>
                            <HeaderGames.Text>{data.text}</HeaderGames.Text>
                            <HeaderGames.Description>{data.description}</HeaderGames.Description>
                        </HeaderGames.Content>
                    </HeaderGames.Group>
                </HeaderGames.Box>
            </HeaderGames.Wrapper>
        </HeaderGames>
    )
}

export default HeaderContainer
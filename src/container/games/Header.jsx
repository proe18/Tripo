import { useContext } from 'react'
import { HeaderGames } from '../../components'
import { GalleryContext, GamesPageContext, ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const { heightElement, groupElement } = useContext(GamesPageContext)
    const { isCloseGallery } = useContext(GalleryContext)
    const { isShow } = useContext(ScrollContext)

    return (
        <HeaderGames hideHeader={isCloseGallery}>
            <HeaderGames.Background bg={data.bg} >
                <HeaderGames.Wrapper>
                    <HeaderGames.Box heightBox={heightElement} animationBox={isShow}>
                        <HeaderGames.Group ref={groupElement}>
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
            </HeaderGames.Background>
        </HeaderGames>
    )
}

export default HeaderContainer
import { useContext } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { HeaderHome } from '../../components'
import { ScrollContext, HomePageContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const { headerElement, marginGames, gamesElement } = useContext(HomePageContext)
    const { isShow } = useContext(ScrollContext)

    return (
        <HeaderHome bg={data.bg} ref={headerElement}>
            <HeaderHome.Wrapper>
                <HeaderHome.Heading animationHeading={isShow}>
                    <HeaderHome.Title>{data.title}</HeaderHome.Title>
                    <HeaderHome.Text>{data.text}</HeaderHome.Text>
                    <HeaderHome.PlatForms>
                        {data.platForms.map((platForm, index) =>
                            <HeaderHome.Link key={index} href='/'>
                                <HeaderHome.Image
                                    src={platForm.img}
                                    alt={platForm.alt}
                                />
                            </HeaderHome.Link>
                        )}
                    </HeaderHome.PlatForms>
                </HeaderHome.Heading>
                <HeaderHome.Games marginTop={marginGames} ref={gamesElement}>
                    {data.listGames.map(game =>
                        <HeaderHome.Game key={game.title} to={game.path}>
                            <HeaderHome.Image src={game.img} alt='GameImage' />
                            <HeaderHome.Overlay>
                                <HeaderHome.Heading>
                                    <HeaderHome.Title>{game.title}</HeaderHome.Title>
                                    <HeaderHome.Text>{game.text}</HeaderHome.Text>
                                </HeaderHome.Heading>
                            </HeaderHome.Overlay>
                        </HeaderHome.Game>
                    )}
                    <HeaderHome.More>
                        <HeaderHome.Overlay>
                            <HeaderHome.Heading>
                                <HeaderHome.Title>Explore Our Games</HeaderHome.Title>
                                <HiOutlineArrowNarrowDown />
                            </HeaderHome.Heading>
                        </HeaderHome.Overlay>
                    </HeaderHome.More>
                </HeaderHome.Games>
            </HeaderHome.Wrapper>
        </HeaderHome>
    )
}

export default HeaderContainer
import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { ScrollContext, NavbarContext } from '../../context'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import * as ROUTES from '../../constants/routes'

const AboutContainer = ({ data }) => {
    const {
        marginAbout,
        homeAboutHeading,
        imageHomeAbout,
        activeElement,
        gamesElement,
        marginGames
    } = useContext(ScrollContext)
    const { handleSwitchPage } = useContext(NavbarContext)

    return (
        <About>
            <About.Wrapper>
                <About.Games marginTop={marginGames} ref={gamesElement}>
                    {data.listGames.map(game =>
                        <About.Game
                            key={game.title}
                            to={game.path}
                            onClick={() => handleSwitchPage()}
                        >
                            <About.Image src={game.img} alt='GameImage' />
                            <About.Overlay>
                                <About.Heading>
                                    <About.Title>{game.title}</About.Title>
                                    <About.Text>{game.text}</About.Text>
                                </About.Heading>
                            </About.Overlay>
                        </About.Game>
                    )}
                    <About.More>
                        <About.GameMore
                            to={ROUTES.HOME}
                            onClick={() => handleSwitchPage('Games')}
                        >
                            <About.Overlay>
                                <About.Heading>
                                    <About.Title>Explore Our Games</About.Title>
                                    <HiOutlineArrowNarrowDown />
                                </About.Heading>
                            </About.Overlay>
                        </About.GameMore>
                    </About.More>
                </About.Games>
                <About.Wrap marginTop={marginAbout}>
                    <About.Heading
                        ref={homeAboutHeading}
                        active={activeElement?.about}
                    >
                        <About.SubTitle>{data.subTitle}</About.SubTitle>
                        <About.Title>{data.title}</About.Title>
                        <About.Text>{data.text}</About.Text>
                        <ButtonLink to={data.button.path}>{data.button.name}</ButtonLink>
                    </About.Heading>
                    <About.WrapImage
                        ref={imageHomeAbout}
                        active={activeElement?.imageAbout}
                    >
                        {data.images.map((image, index) =>
                            <About.Image key={index} src={image.img} alt={image.alt} />
                        )}
                    </About.WrapImage>
                </About.Wrap>
            </About.Wrapper>
        </About>
    )
}

export default AboutContainer
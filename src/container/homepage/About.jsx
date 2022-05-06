import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { ScrollContext, NavbarContext } from '../../context'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import * as ROUTES from '../../constants/routes'
import * as PAGESTITLE from '../../constants/pages_title'

const AboutContainer = ({ data }) => {
    const {
        homeAboutHeading,
        imageHomeAbout,
        activeElement,
    } = useContext(ScrollContext)
    const { handleSwitchPage } = useContext(NavbarContext)

    const handleOnClick = title => {
        switch (title) {
            case PAGESTITLE.KIPON:
                return () => handleSwitchPage(PAGESTITLE.KIPON)
            case PAGESTITLE.ROBOTRIX:
                return () => handleSwitchPage(PAGESTITLE.ROBOTRIX)
            case PAGESTITLE.TREASURE:
                return () => handleSwitchPage(PAGESTITLE.TREASURE)
            default: return
        }
    }

    const selectPath = title => {
        switch (title) {
            case PAGESTITLE.KIPON:
                return ROUTES.KIPON
            case PAGESTITLE.ROBOTRIX:
                return ROUTES.ROBOTRIX
            case PAGESTITLE.TREASURE:
                return ROUTES.TREASURE
            default: return
        }
    }

    return (
        <About>
            <About.Wrapper>
                <About.Games>
                    {data.listGames.map(game =>
                        <About.Game
                            key={game.title}
                            to={selectPath(game.title)}
                            onClick={handleOnClick(game.title)}
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
                            onClick={() => handleSwitchPage(PAGESTITLE.GAMES)}
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
                <About.Group>
                    <About.Heading
                        ref={homeAboutHeading}
                        active={activeElement?.about}
                    >
                        <About.SubTitle>{data.subTitle}</About.SubTitle>
                        <About.Title>{data.title}</About.Title>
                        <About.Text>{data.text}</About.Text>
                        <ButtonLink to={ROUTES.ABOUT}>{data.button.name}</ButtonLink>
                    </About.Heading>
                    <About.WrapImage
                        ref={imageHomeAbout}
                        active={activeElement?.image}
                    >
                        {data.images.map((image, index) =>
                            <About.Image key={index} src={image.img} alt={image.alt} />
                        )}
                    </About.WrapImage>
                </About.Group>
            </About.Wrapper>
        </About>
    )
}

export default AboutContainer
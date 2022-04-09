import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { ScrollContext, NavbarContext } from '../../context'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import * as ROUTES from '../../constants/routes'

const AboutContainer = ({ data }) => {
    const {
        homeAboutHeading,
        imageHomeAbout,
        activeElement,
    } = useContext(ScrollContext)
    const { handleSwitchPage } = useContext(NavbarContext)

    return (
        <About>
            <About.Wrapper>
                <About.Games>
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
                <About.Group>
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
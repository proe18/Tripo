import { useContext } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { Header } from '../components'
import { NavbarContext } from '../context/NavbarContext'

const HeaderContainer = ({data}) => {
    const { mobileMenu } = useContext(NavbarContext)

    return (
        <Header mobileMenu={mobileMenu}>
            <Header.Wrapper>
                <Header.Heading>
                    <Header.Title>{data.title}</Header.Title>
                    <Header.Text>{data.text}</Header.Text>
                    <Header.Platforms>
                        {data.platForms.map((platForm, index) =>
                            <Header.Link key={index} href='/'>
                                <Header.Image
                                    src={platForm.img}
                                    alt={platForm.alt}
                                />
                            </Header.Link>
                        )}
                    </Header.Platforms>
                </Header.Heading>
                <Header.Games>
                    {data.listGames.map(game =>
                        <Header.Game key={game.title} to={game.path}>
                            <Header.Image src={game.img} alt='GameImage' />
                            <Header.Overlay>
                                <Header.Heading>
                                    <Header.Title>{game.title}</Header.Title>
                                    <Header.Text>{game.text}</Header.Text>
                                </Header.Heading>
                            </Header.Overlay>
                        </Header.Game>
                    )}
                    <Header.More>
                        <Header.Overlay>
                            <Header.Heading>
                                <Header.Title>Explore Our Games</Header.Title>
                                <HiOutlineArrowNarrowDown />
                            </Header.Heading>
                        </Header.Overlay>
                    </Header.More>
                </Header.Games>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderContainer
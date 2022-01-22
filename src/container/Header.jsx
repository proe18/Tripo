import { useTheme } from 'styled-components'
import { Header } from '../components'
import { homeData } from '../data/Home_data'

const HeaderContainer = () => {
    const data = homeData.header
    const theme = useTheme()

    return (
        <Header>
            <Header.Wrapper>
                <Header.Heading
                    padding={'185px 0 0'}
                    textColor={theme.color.textColor}
                >
                    <Header.Title
                        fontSizeTitle={'8rem'}
                        fontFamilyTitle={'Suez One, serif'}
                    >
                        {data.title}
                    </Header.Title>
                    <Header.Text
                        fontSizeText={'2.4rem'}
                        fontFamilyText={'Roboto, sans-serif'}
                        margin={'0 0 45px'}
                    >
                        {data.text}
                    </Header.Text>
                    <Header.Platforms>
                        {data.platForms.map((platForm, index) =>
                            <Header.Link key={index} href='/'>
                                <Header.Image
                                    src={platForm.img}
                                    alt={platForm.alt}
                                    maxWidth={platForm.width}
                                    minHeight={platForm.height}
                                />
                            </Header.Link>
                        )}
                    </Header.Platforms>
                </Header.Heading>
                <Header.Games>
                    {data.listGames.map(game =>
                        <Header.Game key={game.title} to={game.path}>
                            <Header.Image
                                src={game.img}
                                alt='GameImage'
                                maxWidth={'300px'}
                                minHeight={'398px'}
                            />
                            <Header.Overlay>
                                <Header.Heading
                                    textColor={theme.color.whiteColor}
                                    position={'absolute'}
                                    bottom={'35px'}
                                    left={'50px'}
                                >
                                    <Header.Title
                                        fontSizeTitle={'2.1rem'}
                                        fontFamilyTitle={'Roboto, sans-serif'}
                                    >
                                        {game.title}
                                    </Header.Title>
                                    <Header.Text
                                        fontSizeText={'1.6rem'}
                                        fontFamilyText={'Roboto, sans-serif'}
                                    >
                                        {game.text}
                                    </Header.Text>
                                </Header.Heading>
                            </Header.Overlay>
                        </Header.Game>
                    )}
                    <Header.More>
                        <Header.Overlay>
                            <Header.Heading
                                textColor={theme.color.whiteColor}
                                position={'absolute'}
                                bottom={'35px'}
                                left={'50px'}
                            >
                                <Header.Title
                                    fontSizeTitle={'2.1rem'}
                                    fontFamilyTitle={'Roboto, sans-serif'}
                                >
                                    Explore Our Games
                                </Header.Title>
                            </Header.Heading>
                        </Header.Overlay>
                    </Header.More>
                </Header.Games>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderContainer
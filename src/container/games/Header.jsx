import { useEffect, useState } from 'react'
import { HeaderGames } from '../../components'

const HeaderContainer = ({ data }) => {
    const [heightElement, setHeightElement] = useState(618)

    useEffect(() => {
        const getHeightElement = () => {
            setHeightElement(document.getElementById('groupElement').offsetHeight)
        }

        window.addEventListener('resize', getHeightElement)

        return () => window.removeEventListener('resize', getHeightElement)
    }, [])

    return (
        <HeaderGames>
            <HeaderGames.Background bg={data.bg} >
                <HeaderGames.Wrapper>
                    <HeaderGames.Box heightElement={heightElement}>
                        <HeaderGames.Group id='groupElement'>
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
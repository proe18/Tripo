import { Header } from '../components'
import { homeData } from '../data/Home_data'

const HeaderContainer = () => {
    const data = homeData.header

    return (
        <Header>
            <Header.Wrapper>
                <Header.Heading>
                    <Header.Title>{data.title}</Header.Title>
                    <Header.Text>{data.text}</Header.Text>
                    <Header.Platforms>
                        {data.platForms.map((platForm, index) =>
                            <Header.Image key={index} src={platForm.img} alt={platForm.alt} />
                        )}
                    </Header.Platforms>
                </Header.Heading>
                <Header.Games>
                    <Header.Game>
                        <Header.Overlay>
                            <Header.Heading>
                                <Header.Title></Header.Title>
                                <Header.Text></Header.Text>
                            </Header.Heading>
                        </Header.Overlay>
                    </Header.Game>
                </Header.Games>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderContainer
import { useContext } from 'react'
import { HeaderHome } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const {
        backGroundHome,
        translate
    } = useContext(ScrollContext)
    const { isShow } = useContext(NavbarContext)

    return (
        <HeaderHome>
            <HeaderHome.Wrap>
                <HeaderHome.Background
                    ref={backGroundHome}
                    translateLeft={translate}
                />
            </HeaderHome.Wrap>
            <HeaderHome.Wrapper>
                <HeaderHome.Heading animationHeading={isShow} >
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
            </HeaderHome.Wrapper>
        </HeaderHome>
    )
}

export default HeaderContainer
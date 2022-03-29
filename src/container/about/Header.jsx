import { useContext } from 'react'
import { HeaderAbout } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const {
        headingElement,
        imageAbout,
        headerAbout,
        // translate 
    } = useContext(ScrollContext)
    const { isShow } = useContext(NavbarContext)

    return (
        <HeaderAbout ref={headerAbout}>
            <HeaderAbout.Wrapper>
                <HeaderAbout.Heading ref={headingElement} animationHeading={isShow}>
                    <HeaderAbout.SubTitle>{data.subTitle}</HeaderAbout.SubTitle>
                    <HeaderAbout.Title>{data.title}</HeaderAbout.Title>
                </HeaderAbout.Heading>
            </HeaderAbout.Wrapper>
            <HeaderAbout.Group>
                <HeaderAbout.Wrap>
                    <HeaderAbout.Image src={data.img} alt='' ref={imageAbout} />
                </HeaderAbout.Wrap>
                <HeaderAbout.Content>
                    <HeaderAbout.Text>{data.text}</HeaderAbout.Text>
                    <HeaderAbout.Text>{data.text2}</HeaderAbout.Text>
                </HeaderAbout.Content>
            </HeaderAbout.Group>
        </HeaderAbout>
    )
}

export default HeaderContainer
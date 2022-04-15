import { useContext } from 'react'
import { HeaderAbout } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const {
        headingElement,
        imageAbout,
        aboutContent,
        translate,
        activeElement
    } = useContext(ScrollContext)
    const { isShow } = useContext(NavbarContext)

    return (
        <HeaderAbout>
            <HeaderAbout.Wrapper>
                <HeaderAbout.Heading ref={headingElement} animationHeading={isShow}>
                    <HeaderAbout.SubTitle>{data.subTitle}</HeaderAbout.SubTitle>
                    <HeaderAbout.Title>{data.title}</HeaderAbout.Title>
                </HeaderAbout.Heading>
            </HeaderAbout.Wrapper>
            <HeaderAbout.Group>
                <HeaderAbout.Wrap translateLeft={translate}>
                    <HeaderAbout.Image src={data.img} alt='' ref={imageAbout} />
                </HeaderAbout.Wrap>
                <HeaderAbout.Content ref={aboutContent} active={activeElement?.content}>
                    <HeaderAbout.Text>{data.text}</HeaderAbout.Text>
                    <HeaderAbout.Text>{data.text2}</HeaderAbout.Text>
                </HeaderAbout.Content>
            </HeaderAbout.Group>
        </HeaderAbout>
    )
}

export default HeaderContainer
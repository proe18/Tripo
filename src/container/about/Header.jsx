import { useContext } from 'react'
import { HeaderAbout } from '../../components'
import { ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const { isShow, headingElement, translateElement } = useContext(ScrollContext)

    return (
        <HeaderAbout>
            <HeaderAbout.Wrapper>
                <HeaderAbout.Heading
                    ref={headingElement}
                    animationHeading={isShow}
                    translateElement={translateElement}
                >
                    <HeaderAbout.SubTitle>{data.subTitle}</HeaderAbout.SubTitle>
                    <HeaderAbout.Title>{data.title}</HeaderAbout.Title>
                </HeaderAbout.Heading>
            </HeaderAbout.Wrapper>
            <HeaderAbout.Group>
                <HeaderAbout.Wrap>
                    <HeaderAbout.Image src={data.img} alt='' />
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
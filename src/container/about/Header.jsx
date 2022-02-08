import { HeaderAbout } from '../../components'

const HeaderContainer = ({ data }) => {
    return (
        <HeaderAbout>
            <HeaderAbout.Wrapper>
                <HeaderAbout.Heading>
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
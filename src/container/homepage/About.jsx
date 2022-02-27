import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { HomePageContext } from '../../context'

const AboutContainer = ({ data }) => {
    const { marginAbout } = useContext(HomePageContext)

    return (
        <About marginTop={marginAbout}>
            <About.Wrapper>
                <About.Heading>
                    <About.SubTitle>{data.subTitle}</About.SubTitle>
                    <About.Title>{data.title}</About.Title>
                    <About.Text>{data.text}</About.Text>
                    <ButtonLink to={data.button.path}>{data.button.name}</ButtonLink>
                </About.Heading>
                <About.Wrap>
                    {data.images.map((image, index) =>
                        <About.Image key={index} src={image.img} alt={image.alt} />
                    )}
                </About.Wrap>
            </About.Wrapper>
        </About>
    )
}

export default AboutContainer
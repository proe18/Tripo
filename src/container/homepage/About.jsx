import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { ScrollContext } from '../../context'

const AboutContainer = ({ data }) => {
    const { marginAbout } = useContext(ScrollContext)
    const { homeAboutHeading, imageHomeAbout, activeElement } = useContext(ScrollContext)

    return (
        <About marginTop={marginAbout}>
            <About.Wrapper>
                <About.Heading
                    ref={homeAboutHeading}
                    active={activeElement?.about}
                >
                    <About.SubTitle>{data.subTitle}</About.SubTitle>
                    <About.Title>{data.title}</About.Title>
                    <About.Text>{data.text}</About.Text>
                    <ButtonLink to={data.button.path}>{data.button.name}</ButtonLink>
                </About.Heading>
                <About.Wrap
                    ref={imageHomeAbout}
                    active={activeElement?.imageAbout}
                >
                    {data.images.map((image, index) =>
                        <About.Image key={index} src={image.img} alt={image.alt} />
                    )}
                </About.Wrap>
            </About.Wrapper>
        </About>
    )
}

export default AboutContainer
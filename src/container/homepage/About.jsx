import { useContext } from 'react'
import { About, ButtonLink } from '../../components'
import { HomePageContext, ScrollContext } from '../../context'

const AboutContainer = ({ data }) => {
    const { marginAbout } = useContext(HomePageContext)
    const { homeAboutHeading, imageAbout, activeHomeElement } = useContext(ScrollContext)
    // const activeComponents = activeHomeElement.current

    return (
        <About marginTop={marginAbout}>
            <About.Wrapper>
                <About.Heading
                    ref={homeAboutHeading}
                    // active={activeComponents[0]}
                >
                    <About.SubTitle>{data.subTitle}</About.SubTitle>
                    <About.Title>{data.title}</About.Title>
                    <About.Text>{data.text}</About.Text>
                    <ButtonLink to={data.button.path}>{data.button.name}</ButtonLink>
                </About.Heading>
                <About.Wrap ref={imageAbout}>
                    {data.images.map((image, index) =>
                        <About.Image key={index} src={image.img} alt={image.alt} />
                    )}
                </About.Wrap>
            </About.Wrapper>
        </About>
    )
}

export default AboutContainer
import { About, ButtonLink } from '../../components'

const AboutContainer = ({ data }) => {
    return (
        <About>
            <About.Wrapper>
                <About.Heading>
                    <About.SubTitle>{data.subTitle}</About.SubTitle>
                    <About.Title>{data.title}</About.Title>
                    <About.Text>{data.text}</About.Text>
                    <ButtonLink
                        to={data.button.path}
                        widthbutton={'142px'}
                        outlinehover='true'
                    >
                        {data.button.name}
                    </ButtonLink>
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
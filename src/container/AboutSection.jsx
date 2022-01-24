import { Section, ButtonLink } from '../components'

const AboutSection = ({ data }) => {
    return (
        <Section>
            <Section.Wrapper>
                <Section.Heading>
                    <Section.SubTitle>{data.subTitle}</Section.SubTitle>
                    <Section.Title>{data.title}</Section.Title>
                    <Section.Text>{data.text}</Section.Text>
                    <ButtonLink
                        to={data.button.path}
                        widthbutton={'142px'}
                        outlinehover='true'
                    >
                        {data.button.name}
                    </ButtonLink>
                </Section.Heading>
                <Section.Wrap>
                    {data.images.map((image, index) =>
                        <Section.Image key={index} src={image.img} alt={image.alt} />
                    )}
                </Section.Wrap>
            </Section.Wrapper>
        </Section>
    )
}

export default AboutSection
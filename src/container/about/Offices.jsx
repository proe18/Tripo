import { ButtonLink, Offices } from '../../components'

const OfficesContainer = ({ data }) => {
    return (
        <Offices bg={data.bg}>
            <Offices.Overlay>
                <Offices.Wrapper>
                    <Offices.Group>
                        <Offices.Heading>
                            <Offices.SubTitle>{data.title}</Offices.SubTitle>
                            <Offices.Title>{data.place}</Offices.Title>
                            <Offices.Text>{data.text}</Offices.Text>
                        </Offices.Heading>
                        <Offices.Box>
                            <Offices.Wrap>
                                <Offices.Image src={data.box.img} alt='' />
                            </Offices.Wrap>
                            <Offices.Content>
                                <Offices.Title>{data.box.title}</Offices.Title>
                                <Offices.Text>{data.box.text}</Offices.Text>
                                <ButtonLink to={'/'}>{data.box.button}</ButtonLink>
                            </Offices.Content>
                        </Offices.Box>
                    </Offices.Group>
                </Offices.Wrapper>
            </Offices.Overlay>
        </Offices>
    )
}

export default OfficesContainer
import { useContext } from 'react'
import { ButtonLink, Offices } from '../../components'
import * as ROUTES from '../../constants/routes'
import { ScrollContext } from '../../context'

const OfficesContainer = ({ data }) => {
    const { aboutOurOffices, activeElement } = useContext(ScrollContext)

    return (
        <Offices>
            <Offices.Overlay>
                <Offices.Wrapper>
                    <Offices.Group ref={aboutOurOffices} active={activeElement?.offices}>
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
                                <ButtonLink to={ROUTES.CAREERS}>{data.box.button}</ButtonLink>
                            </Offices.Content>
                        </Offices.Box>
                    </Offices.Group>
                </Offices.Wrapper>
            </Offices.Overlay>
        </Offices>
    )
}

export default OfficesContainer
import { Founder } from '../../components'

const FounderContainer = ({ data }) => {
    return (
        <Founder>
            <Founder.Wrapper>
                <Founder.Title>{data.title}</Founder.Title>
                <Founder.Group>
                    {data.founders.map((founder, index) =>
                        <Founder.Box key={index}>
                            <Founder.Wrap>
                                <Founder.Image src={founder.img} alt='' />
                            </Founder.Wrap>
                            <Founder.Info>
                                <Founder.Name>{founder.founderName}</Founder.Name>
                                <Founder.Position>{founder.position}</Founder.Position>
                            </Founder.Info>
                        </Founder.Box>
                    )}
                </Founder.Group>
            </Founder.Wrapper>
        </Founder>
    )
}

export default FounderContainer
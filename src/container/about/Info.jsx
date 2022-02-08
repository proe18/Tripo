import { Info } from '../../components'

const InfoContainer = ({ data }) => {
    return (
        <Info bg={data.bg}>
            <Info.Overlay>
                <Info.Wrapper>
                    <Info.Title>{data.title}</Info.Title>
                    <Info.Group>
                        {data.contents.map(content =>
                            <Info.Box key={content.title}>
                                <Info.Content>
                                    <Info.Title>{content.title}</Info.Title>
                                    <Info.Text>{content.text}</Info.Text>
                                </Info.Content>
                            </Info.Box>
                        )}
                    </Info.Group>
                </Info.Wrapper>
            </Info.Overlay>
        </Info>
    )
}

export default InfoContainer
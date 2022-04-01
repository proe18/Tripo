import { useContext } from 'react'
import { Info } from '../../components'
import { ScrollContext } from '../../context'

const InfoContainer = ({ data }) => {
    const { aboutTitleInfo, aboutInfo } = useContext(ScrollContext)

    return (
        <Info bg={data.bg}>
            <Info.Overlay>
                <Info.Wrapper>
                    <Info.Title ref={aboutTitleInfo}>{data.title}</Info.Title>
                    <Info.Group ref={aboutInfo}>
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
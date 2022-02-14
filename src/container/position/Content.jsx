import { ContentPosition } from '../../components'

const ContentContainer = ({ data }) => {
    return (
        <ContentPosition>
            <ContentPosition.Wrapper>
                <ContentPosition.Group>
                    <ContentPosition.RedContent>
                        <ContentPosition.Wrap>
                            <ContentPosition.Title>{data.red.title}</ContentPosition.Title>
                            <ContentPosition.Text>{data.red.text_1}</ContentPosition.Text>
                            <ContentPosition.Text>{data.red.text_2}</ContentPosition.Text>
                            <ContentPosition.Text>{data.red.text_3}</ContentPosition.Text>
                        </ContentPosition.Wrap>
                    </ContentPosition.RedContent>
                    <ContentPosition.WhiteContent>
                        <ContentPosition.Wrap>
                            <ContentPosition.Title>{data.white.title}</ContentPosition.Title>
                            <ContentPosition.Text>{data.white.text_1}</ContentPosition.Text>
                            <ContentPosition.Text>{data.white.text_2}</ContentPosition.Text>
                            <ContentPosition.Text>{data.white.text_3}</ContentPosition.Text>
                        </ContentPosition.Wrap>
                    </ContentPosition.WhiteContent>
                </ContentPosition.Group>
            </ContentPosition.Wrapper>
        </ContentPosition>
    )
}

export default ContentContainer
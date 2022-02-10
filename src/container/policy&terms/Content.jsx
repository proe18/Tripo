import { Content } from '../../components'

const ContentContainer = ({ data }) => {
    return (
        <Content>
            <Content.Header>
                <Content.Wrapper>
                    <Content.Title>{data.title}</Content.Title>
                </Content.Wrapper>
            </Content.Header>
            <Content.Section>
                <Content.Wrapper>
                    <Content.Group>
                        <Content.Text>{data.text}</Content.Text>
                        <Content.Text>{data.text2}</Content.Text>
                        <Content.Questions>
                            <Content.Text>{data.question.title}</Content.Text>
                            <Content.ListQuestion>
                                {data.question.listQuestion.map((question, index) =>
                                    <Content.Question key={index}>{question}</Content.Question>
                                )}
                            </Content.ListQuestion>
                            <Content.Text>
                                You can check out this <a href="/">support article</a> to receive more information about
                                how to create a privacy policy
                            </Content.Text>
                        </Content.Questions>
                    </Content.Group>
                </Content.Wrapper>
            </Content.Section>
            <Content.Section>
                <Content.Wrapper>
                    <Content.Group>
                        <Content.Description>{data.description}</Content.Description>
                    </Content.Group>
                </Content.Wrapper>
            </Content.Section>
        </Content>
    )
}

export default ContentContainer
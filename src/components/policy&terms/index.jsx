import { Wrapper } from '../../GlobalStyles'
import { 
    Inner, 
    Header, 
    Section, 
    Title, 
    Group, 
    Text,
    Questions, 
    ListQuestion, 
    Question, 
    Description 
} from './PolicyAndTermsStyled'

const Content = ({ children, ...restProps }) => {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Content.Header = function ContentHeader({ children, ...restProps }) {
    return (
        <Header {...restProps}>{children}</Header>
    )
}

Content.Section = function ContentSection({ children, ...restProps }) {
    return (
        <Section {...restProps}>{children}</Section>
    )
}

Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

Content.Title = function ContentTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Content.Group = function ContentGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Content.Text = function ContentText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Content.Questions = function ContentQuestions({ children, ...restProps }) {
    return (
        <Questions {...restProps}>{children}</Questions>
    )
}

Content.ListQuestion = function ContentListQuestion({ children, ...restProps }) {
    return (
        <ListQuestion {...restProps}>{children}</ListQuestion>
    )
}

Content.Question = function ContentQuestion({ children, ...restProps }) {
    return (
        <Question {...restProps}>{children}</Question>
    )
}

Content.Description = function ContentDescription({ children, ...restProps }) {
    return (
        <Description {...restProps}>{children}</Description>
    )
}

export default Content
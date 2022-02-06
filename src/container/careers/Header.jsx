import { HeaderCareers } from '../../components'

const HeaderContainer = ({data}) => {
    return (
        <HeaderCareers>
            <HeaderCareers.Wrapper>
                <HeaderCareers.Heading>
                    <HeaderCareers.SubTitle>{data.subTitle}</HeaderCareers.SubTitle>
                    <HeaderCareers.Title>{data.title}</HeaderCareers.Title>
                    <HeaderCareers.Text>{data.text}</HeaderCareers.Text>
                </HeaderCareers.Heading>
            </HeaderCareers.Wrapper>
        </HeaderCareers>
    )
}

export default HeaderContainer
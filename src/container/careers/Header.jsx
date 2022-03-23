import { useContext } from 'react'
import { HeaderCareers } from '../../components'
import { ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const { isShow, headingElement } = useContext(ScrollContext)

    return (
        <HeaderCareers>
            <HeaderCareers.Wrapper>
                <HeaderCareers.Heading ref={headingElement} animationHeading={isShow} >
                    <HeaderCareers.SubTitle>{data.subTitle}</HeaderCareers.SubTitle>
                    <HeaderCareers.Title>{data.title}</HeaderCareers.Title>
                    <HeaderCareers.Text>{data.text}</HeaderCareers.Text>
                </HeaderCareers.Heading>
            </HeaderCareers.Wrapper>
        </HeaderCareers>
    )
}

export default HeaderContainer
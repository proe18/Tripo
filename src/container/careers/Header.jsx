import { useContext } from 'react'
import { HeaderCareers } from '../../components'
import { NavbarContext, ScrollContext } from '../../context'

const HeaderContainer = ({ data }) => {
    const { headingElement } = useContext(ScrollContext)
    const { isShow } = useContext(NavbarContext)

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
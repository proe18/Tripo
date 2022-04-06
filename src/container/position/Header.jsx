import { useContext } from 'react'
import { NavbarContext, PositionFormContext } from '../../context'
import { Button, HeaderPosition } from '../../components'

const HeaderContainer = ({ data }) => {
    const { handleCloseForm } = useContext(PositionFormContext)
    const { isShow } = useContext(NavbarContext)
    console.log(isShow);

    return (
        <HeaderPosition>
            <HeaderPosition.Background>
                <HeaderPosition.Overlay>
                    <HeaderPosition.Wrapper>
                        <HeaderPosition.Content animationContent={isShow}>
                            <HeaderPosition.SubTitle>{data.subTitle}</HeaderPosition.SubTitle>
                            <HeaderPosition.Title>{data.title}</HeaderPosition.Title>
                            <HeaderPosition.Text>
                                <HeaderPosition.Location>{data.location}</HeaderPosition.Location>
                                <HeaderPosition.Employment>{data.employment}</HeaderPosition.Employment>
                            </HeaderPosition.Text>
                            <Button onClick={handleCloseForm}>{data.buttonName}</Button>
                        </HeaderPosition.Content>
                    </HeaderPosition.Wrapper>
                </HeaderPosition.Overlay>
            </HeaderPosition.Background>
        </HeaderPosition>
    )
}

export default HeaderContainer
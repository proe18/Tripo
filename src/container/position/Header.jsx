import { useContext } from 'react'
import { PositionFormContext } from '../../context'
import { Button, HeaderPosition } from '../../components'

const HeaderContainer = ({ data }) => {
    const { handleCloseForm } = useContext(PositionFormContext)

    return (
        <HeaderPosition>
            <HeaderPosition.Background bg={data.bg}>
                <HeaderPosition.Overlay>
                    <HeaderPosition.Wrapper>
                        <HeaderPosition.Content>
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
import { Button, HeaderPosition } from '../../components'

const HeaderContainer = ({ data }) => {
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
                            <Button>{data.buttonName}</Button>
                        </HeaderPosition.Content>
                    </HeaderPosition.Wrapper>
                </HeaderPosition.Overlay>
            </HeaderPosition.Background>
        </HeaderPosition>
    )
}

export default HeaderContainer
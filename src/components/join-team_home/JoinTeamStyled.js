import styled from 'styled-components'
// import JoinTeam_1Bg from '../../images/background_home_2.jpg'
// import JoinTeam_2Bg from '../../images/background_careers_3.jpg'

export const Inner = styled.section`
    width: 100%;
    height: 100%;
    max-height: 1349px;
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: ${({bg}) => `url(${bg})`} no-repeat;
    background-size: cover;

    &:first-of-type {
        max-height: 747px;
    }

    &:last-of-type {
        max-height: 602px;
    }
`

export const Heading = styled.div``

export const Title = styled.h1``

export const Text = styled.p``
import styled from 'styled-components'

export const Inner = styled.div`
    padding-top: 100px;
    padding-bottom: 65px;
    display: ${({hideGallery}) => hideGallery && 'none'};
`

export const Wrap = styled.div`
    width: 95%;
    height: 100%;
    max-width: 100vw;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1025px;
    max-height: 577px;
    margin: 0 auto;
`

export const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonIcon = styled.div`
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
`

export const Control = styled(Icons)`
    max-width: 98.5%;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);

    ${ButtonIcon} {
        &:last-of-type {
            margin-left: 100%;
        }
    }
`
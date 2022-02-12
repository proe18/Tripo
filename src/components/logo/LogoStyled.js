import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const LogoStyled = styled.div`
    width: 100%;
    height: 100%;
    max-width: 166px;
    max-height: 60px;
    text-align: center;
    font-size: 2.6rem;
    overflow: hidden;
    z-index: 10;
    box-shadow: ${({theme}) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    @media (max-width: 860px) {
        display: ${({mobileMenu}) => mobileMenu && 'none'};
    }

    @media (max-width: 420px) {
        max-width: 160px;
        max-height: 50px;
        line-height: 50px;
        font-size: 2.2rem;
    }

    @media (min-width: 421px) and (max-width: 640px) {
        max-width: 150px;
        max-height: 50px;
        line-height: 50px;
        font-size: 2.2rem;
    }

    @media (max-width: 280px) {
        max-width: 140px;
    }
`

export const LogoLink = styled(Link)`
    display: block;
    padding: 13.6px 27px;
    text-decoration: none;
    font-family: ${({theme}) => theme.font.caveat};
    color: ${({ theme }) => theme.color.whiteColor};
    background-color: ${({ theme }) => theme.color.primaryColor};

    @media (max-width: 640px) {
        padding: 0 24px;
    }
`
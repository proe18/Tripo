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
    box-shadow: ${({theme}) => theme.shadow.boxShadow};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.radius1};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.radius1};

    @media (min-width: 768px) {
        font-size: 2.4rem;
        display: ${({mobileMenu}) => mobileMenu && 'none'};
    }

    @media (min-width: 416px) and (max-width: 767px) {
        max-width: 140px;
        max-height: 50px;
        line-height: 2.6rem;
        font-size: 2.2rem;
        display: ${({mobileMenu}) => mobileMenu && 'none'};
    }

    @media (min-width: 280px) and (max-width: 415px) {
        max-height: 50px;
        line-height: 2.6rem;
        display: ${({mobileMenu}) => mobileMenu && 'none'};
    }
`

export const LogoLink = styled(Link)`
    display: block;
    padding: 15px 27px;
    text-decoration: none;
    font-family: ${({theme}) => theme.font.caveat};
    color: ${({ theme }) => theme.color.whiteColor};
    background-color: ${({ theme }) => theme.color.primaryColor};

    @media (min-width: 416px) and (max-width: 767px) {
        padding: 12px 24px;
    }

    @media (min-width: 280px) and (max-width: 415px) {
        padding: 12px 24px;
    }
`
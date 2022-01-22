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

    @media (max-width: 1000px) {
        max-width: 140px;
        max-height: 50px;
        font-size: 2.2rem;
        display: ${({mobileMenu}) => mobileMenu && 'none'};
    }
`

export const LogoLink = styled(Link)`
    display: block;
    padding: 14px 27px;
    text-decoration: none;
    font-family: ${({theme}) => theme.font.caveat};
    color: ${({ theme }) => theme.color.whiteColor};
    background-color: ${({ theme }) => theme.color.primaryColor};

    @media (max-width: 1000px) {
        padding: 12px 24px;
    }

    @media (max-width: 280px) {
        padding: 13px 24px;
    }
`
import styled from 'styled-components';
import { Link } from '../navbar/NavBarStyled';

export const Inner = styled.div`
    width: 100%;
    max-width: 104px;
    position: absolute;
    top: 67px;

    &::before {
        content: '';
        width: 110px;
        height: 12px;
        position: absolute;
        left: 0;
        top: -7px;
    }

    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        position: relative;
        /* ${({ mobileMenu }) => mobileMenu && 'width: 100%;'} */
    }
`

export const Menu = styled.ul`
    width: 100%;
    max-width: 104px;
    list-style: none;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.radius1};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`

export const Item = styled.li`
    line-height: normal;
    background-color: ${({ theme }) => theme.color.whiteColor};
    transition: ease-in-out 0.3s;

    ${Link} {
        padding: 6px 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    &:hover ${Link} {
        color: ${({ theme }) => theme.color.whiteColor};
    }
`
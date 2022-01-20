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
        width: 100%;
        max-width: 100vw;
        position: unset;

        &::before {
            content: '';
            width: 0;
            height: 0;
            position: unset;
        }
    }
`

export const Menu = styled.ul`
    list-style: none;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.radius1};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};

    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        border-radius: unset;
        box-shadow: unset;
    }
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

    @media (max-width: ${({ theme }) => `${theme.breakPoint}px`}) {
        ${Link} {
            font-size: 1.8rem;
            padding-left: 50px;
        }
    }
`
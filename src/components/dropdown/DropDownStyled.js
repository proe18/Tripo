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

    @media (max-width: 860px) {
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

    @media (max-width: 860px) {
        border-radius: unset;
        box-shadow: unset;
    }
`

export const Item = styled.li`
    line-height: normal;
    background-color: ${({ theme }) => theme.color.whiteColor};
    transition: ease-in-out 0.3s;
    -moz-transition: ease-in-out 0.3s;
    -o-transition: ease-in-out 0.3s;
    -webkit-transition: ease-in-out 0.3s;

    ${Link} {
        padding: 6px 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primaryColor};
    }

    &:hover ${Link} {
        color: ${({ theme }) => theme.color.whiteColor};
    }

    @media (max-width: 860px) {
        line-height: 50px;
        min-height: 50px;
    }

    @media (max-width: 420px) {
        ${Link} {
            font-size: 1.8rem;
            padding: 0 50px;
        }
    }

    @media (min-width: 421px) and (max-width: 640px) {
        ${Link} {
            font-size: 2rem;
            padding: 0 50px;
        }
    }

    @media (min-width: 641px) and (max-width: 860px) {
        ${Link} {
            font-size: 2.2rem;
            padding: 0 50px;
        }
    }
`
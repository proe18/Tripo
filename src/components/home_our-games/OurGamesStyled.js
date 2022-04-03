import styled, { css } from 'styled-components'
import { Link, PlatForms, Image } from '../../GlobalStyles'
import BackGround from '../../images/background_home_3.jpg'

export const Inner = styled.section``

export const Background = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1150px;
    max-height: 1100px;
    margin: 115px auto 0;
    background: url(${BackGround}) no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 699.5px) {
        background: none;
    }

    @media (min-width: 681px) and (max-width: 890.5px) {
        background-size: contain;
        background-position-y: 60%;
    }
`

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 500;
    font-family: 'Suez One', serif;

    @media (max-width: 320px) {
        font-size: 2.6rem;
    }

    @media (min-width: 321px) and (max-width: 640px) {
        font-size: 3.7rem;
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 720px;
    line-height: 3rem;
    margin: 0 auto;
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 320px) {
        font-size: 1.6rem;
    }
`

export const Heading = styled.div`
    margin-top: 205px;
    text-align: center;
    color: ${({ theme }) => theme.color.textColor};
    & {
        ${Title}, ${Text} {
            opacity: 0;
        }
    }
    ${({ active }) => active && css`
        ${Title} {
            will-change: opacity;
            opacity: 1;
            transition: opacity linear 1.5s;
        }

        ${Text} {
            will-change: opacity;
            opacity: 1;
            transition: opacity linear 1.5s 0.2s;
        }
    `}
    
    @media (max-width: 640px) {
        margin-top: 140px;
    }
`

export const Game = styled.div`
    width: 100%;
    height: 100%;
    max-width: 390px;
    max-height: 379px;
    padding: 45px 56px;
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    background-color: ${({ theme }) => theme.color.whiteColor};

    @media (max-width: 380px) {
        min-height: 356px;
        padding: 25px 36px;
    }

    @media (min-width: 700px) and (max-width: 799.5px) {
        max-width: 310px;
        padding: 25px 36px;
    }

    @media (min-width: 800px) and (max-width: 890.5px) {
        max-width: 350px;
    }

    &:not(:last-child) {
        margin-bottom: 415px;

        @media (max-width: 699.5px) {
            margin-bottom: 20px;
        }
    }

    ${Heading} {
        width: 100%;
        max-width: 270px;
        margin: 0 auto 35px;
        display: flex;
        align-items: center;
        text-align: left;
        
        ${Title}, ${Text} {
            opacity: 1;
        }

        @media (max-width: 428px) {
            margin-bottom: 10px;
            min-width: 180px;
        }
    }

    ${PlatForms} {
        width: 100%;
        height: 100%;
        max-width: 280px;
        max-height: 40px;

        ${Link} {
            width: 100%;
            height: 100%;
            max-height: 40px;
            cursor: pointer;

            @media (max-width: 340px) {
                ${Image} {
                    min-height: 32px;
                    object-fit: contain;
                }
            }

            @media (min-width: 341px) and (max-width: 420px) {
                ${Image} {
                    max-height: 35px;
                }
            }
        }

        ${Link}:first-of-type {
            max-width: 120px;

            @media (max-width: 300px) {
                max-width: 80px;
            }

            @media (min-width: 301px) and (max-width: 340px) {
                max-width: 90px;
            }

            @media (min-width: 341px) and (max-width: 420px) {
                max-width: 110px;
            }

            @media (min-width: 700px) and (max-width: 799.5px) {
                max-width: 100px;
            }

            @media (min-width: 800px) and (max-width: 890.5px) {
                max-width: 108px;
            }
        }

        ${Link}:last-of-type {            
            max-width: 137px;
            
            @media (max-width: 300px) {
                max-width: 90px;
            }

            @media (min-width: 301px) and (max-width: 340px) {
                max-width: 100px;
            }

            @media (min-width: 341px) and (max-width: 420px) {
                max-width: 120px;
            }

            @media (min-width: 700px) and (max-width: 799.5px) {
                max-width: 110px;
            }

            @media (min-width: 800px) and (max-width: 890.5px) {
                max-width: 118px;
            }
        }

        @media (max-width: 320px) {
            justify-content: space-around;
        }

        @media (max-width: 280px) {
            max-width: 180px;
            max-height: 32px;
        }
    }
`

export const WrapImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    ${Game} {
        opacity: 0;
        transform: translateX(-50px);
    }

    ${WrapImage} {
        ${Image} {
            opacity: 0;
            transform: translateX(50px);
        }
    }

    ${({ active }) => active && css`
        ${Game} {
            will-change: opacity, transform;
            opacity: 1;
            transform: translateX(0);
            transition: all linear 0.8s;
        }

        ${Game}:last-of-type {
            will-change: opacity, transform;
            opacity: 1;
            transform: translateX(0);
            transition: all linear 0.8s 0.4s;
        }

        ${WrapImage} {
            ${Image} {
                will-change: opacity, transform;
                opacity: 1;
                transform: translateX(0);
                transition: all linear 0.8s;
            }
        }
    `}

    ${WrapImage} {
        ${Image} {
            width: 100%;
            height: 100%;
            max-width: 270px;
            max-height: 300px;
            margin-top: -415px;
            
            @media (max-width: 340px) {
                max-width: 180px;
                max-height: 200px;
                margin: 20px auto 0;
            }

            @media (min-width: 341px) and (max-width: 699.5px) {
                margin: 40px auto 0;
            }

            @media (min-width: 341px) and (max-width: 420px) {
                max-width: 200px;
                min-height: 220px;
            }

            @media (min-width: 421px) and (max-width: 640px) {
                max-width: 220px;
                min-height: 240px;
            }

            @media (min-width: 641px) and (max-width: 799.5px) {
                max-width: 250px;
                min-height: 280px;
            }
        }
    }

    @media (max-width: 699.5px) {
        max-height: max-content;
        margin-top: 70px;
        justify-content: center;
    }
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    max-width: 90px;
    min-height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};

    @media (max-width: 420px) {
        max-width: 80px;
        min-height: 80px;
    }
`

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    max-width: 78px;
    max-height: 78px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.radius2};

    @media (max-width: 420px) {
        max-width: 70px;
        max-height: 70px;
    }
`

export const Info = styled.div`
    margin-left: 20px;

    ${Title} {
        font-size: 2.1rem;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;

        @media (max-width: 420px) {
            margin-bottom: 0;
        }

        @media (max-width: 285px) {
            font-size: 1.5rem;
        }

        @media (min-width: 286px) and (max-width: 300px) {
            font-size: 1.6rem;
        }

        @media (min-width: 301px) and (max-width: 320px) {
            font-size: 1.8rem;
        }

        @media (min-width: 321px) and (max-width: 420px) {
            font-size: 1.9rem;
        }
    }

    ${Text} {
        font-size: 1.6rem;

        @media (max-width: 284px) {
            font-size: 1.2rem;
        }

        @media (min-width: 285px) and (max-width: 300px) {
            font-size: 1.3rem;
        }

        @media (min-width: 301px) and (max-width: 320px) {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 320px) {
        margin-left: 10px;
    }
`

export const Description = styled.p`
    width: 100%;
    max-width: 280px;
    margin-bottom: 35px;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    line-height: 2.5rem;

    @media (max-width: 428px) {
        text-align: center;
        min-width: 180px;
    }

    @media (max-width: 380px) {
        margin-bottom: 20px;
    }

    @media (min-width: 800px) and (max-width: 890.5px) {
        margin-bottom: 20px;
    }
`
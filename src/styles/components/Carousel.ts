import styled from "styled-components"

interface CarouselItemProps {
    img: string
}

export const CarouselContainer = styled.div`
    width: inherit;
    padding-left: 20%;
    padding-right: 20%;
    margin-top: 100px;
    @media (max-width: 999px) {
        padding-left: 0;
        padding-right: 0;
    }

    button.rec-dot{
        background-color: ${props => props.theme.colors.background};
        box-shadow: 0 0 1px 3px transparent;
        &:hover, &:active, &:focus {
            box-shadow: 0 0 1px 3px ${props => props.theme.colors.text};
        }
    }
    button.rec-arrow{
        background-color: ${props => props.theme.colors.background};
        &:hover {
            background-color: ${props => props.theme.colors.accent};
        }
    }
`

export const CarouselItem = styled.div<CarouselItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: inherit;
    background-color: black;
    color: #FFF;
    margin: 15px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: -1;
    div {
        text-align: center;
        margin-top: 10%;
        h4 {
            font-size: 25px;
            color: ${props => props.theme.colors.primary};
            @media (max-width: 999px) {
                font-size: 17.5px;
            }
        }
        p {
            font-size: 20px;
            @media (max-width: 999px) {
                font-size: 14px;
            }
        }
    }
`
import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 60%;
    height: 390px;
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    ul {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        overflow: hidden;
        li {
            margin-right: 20px;
            cursor: pointer;
            &:hover>p{
                color: ${props => props.theme.colors.primary};
            }
            img {
                width: 180px;
                height: auto;
                border-radius: 5px;

                @media (max-width: 999px) {
                    width: 80px;
                }
            }
        }
    }

    @media (max-width: 999px) {
        width: 100%;
    }
`
export const CarouselLeft = styled.div`
    font-size: 25px;
    position: absolute;
    left: 0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    border-radius: 100%;
    padding: 7px 7px 0 7px;
    cursor: pointer;
`
export const CarouselRight = styled.div`
    font-size: 25px;
    position: absolute;
    right: 0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background};
    border-radius: 100%;
    padding: 7px 7px 0 7px;
    cursor: pointer;
`
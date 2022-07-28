import styled from "styled-components";

export const FavoritesPage = styled.div`
    margin-top: 63px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 50px;
        font-size: 16px;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.primary};
    }    
    
`
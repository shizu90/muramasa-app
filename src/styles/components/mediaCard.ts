import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin-top: 5rem;
    img {
        width: 260px;
        height: 380px;
        border-radius: 5px;
        border: 2px solid ${props => props.theme.colors.primary};
        margin-right: 20px;
    }
    @media (max-width: 999px) {
        flex-direction: column;
        text-align: center;
        img {
            width: 200px;
            height: 280px;
            align-self: center;
            margin-right: 0;
        }
    }
`
export const InfoContainer = styled.div`
    h1 {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 10px;
    }
    h2 {
        margin-bottom: 10px;
    }
    p {
        margin-top: 10px;
        margin-bottom: 10px;
        align-self: center;
    }
    div {
        display: flex;
        align-items: center;
        p {
            margin-left: 2px;
        }
    }

    hr {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    input {
        margin-right: 10px;
    }

    input:last-child {
        margin-right: 0;
    }
    
    @media (max-width: 999px) {
        p {
            font-size: 14px;
        }
    }
`

export const StatusList = styled.div`
    list-style: none;
    li {
        margin-right: 10px;
        display: flex;
        cursor: default;
        div {
            cursor: default;
            display: flex;
            align-items: center;
        }
        p{
            cursor: default;
        }
    }
`

export const FavoriteStatus = styled.div`
    cursor: pointer;
`

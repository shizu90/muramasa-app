import styled from "styled-components"

export const ErrorScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
    p:first-child {
        padding-right: 28px;
        border-right: 2px solid ${props => props.theme.colors.text};
    }
    p {
        font-size: 20px;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.text};
    }

    p:last-child {
        margin-left: 28px;
    }
`
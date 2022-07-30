import styled from "styled-components";

export const RegisterMainpage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-right: 20%;
    margin-left: 20%;
    border-left: 2px solid ${props => props.theme.colors.accent};
    border-right: 2px solid ${props => props.theme.colors.accent};
    form {
        margin-top: 10%;
        border: 2px solid ${props => props.theme.colors.accent};
        border-radius: 10px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 10%;
        div, input {
            margin-bottom: 10px;
            div {
                float: right;
            }
        }

        span {
            color: ${props => props.theme.colors.primary};
            font-size: 13px;
            margin-bottom: 10px;
            margin-left: 10px;
            font-weight: 700;
        }

        a {
            align-self: center;
            color: ${props => props.theme.colors.text};
        }
    }
`
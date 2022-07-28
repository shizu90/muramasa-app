import styled from "styled-components";

export const RegisterMainpage = styled.div`
    margin-top: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    form {
        margin-top: 10%;
        border: 2px solid ${props => props.theme.colors.accent};
        border-radius: 10px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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
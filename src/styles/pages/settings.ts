import styled from "styled-components"
import { FaPen } from "react-icons/fa"

export const SettingsPage = styled.div`
    margin-top: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        margin-top: 100px;
        div {
            p {
                margin-bottom: 13px;
                margin-top: 13px;
            }
            img {
                width: 200px;
                height: 200px;
                border-radius: 100%;
                border: 5px solid ${props => props.theme.colors.accent};
            }
            input[type=file]{
                display: none;
            }
            label {
                margin-bottom: 10px;
                margin-top: 10px;
            }
            label:nth-child(2) {
                background-color: none;
                border: 2px solid ${props => props.theme.colors.accent};
                margin-top: 15px;
                padding: 10px 0 10px 0;
                text-align: center;
                cursor: pointer;
                transition: 160ms ease-out;
                border-radius: 5px;
                &:hover {
                    border: 2px solid ${props => props.theme.colors.primary}; 
                }
            }
            textarea {
                font-family: 'Roboto';
                letter-spacing: 1px;
                width: auto;
                height: 200px;
                background-color: black;
                outline: none;
                border: 2px solid ${props => props.theme.colors.accent};
                color: ${props => props.theme.colors.text};
                padding: 10px;
                border-radius: 5px;
                resize: none;
                &:focus {
                    border: 2px solid ${props => props.theme.colors.primary};
                }
            }
            span {
                color: ${props => props.theme.colors.primary};
                font-weight: 700;
                font-size: 13px;
                margin-left: 10px;
            }
            input[type=button]{
                margin-top: 50px;
            }
        }
        div:first-child{
            margin-top: 30px;
            margin-right: 70px;
            display: flex;
            flex-direction: column;
        }

        div:last-child {
            display: flex;
            flex-direction: column;
        }
    }
`

export const PenIcon = styled(FaPen)`
    margin-top: 8px;
    margin-right: 10px;
`
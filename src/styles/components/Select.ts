import styled from "styled-components";

export const SelectBox = styled.select`
    background-color: black;
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
    margin-right: 15px;
    margin-left: 15px;
    &:focus {
        outline: none;
        border: 2px solid ${props => props.theme.colors.primary};
    }
    @media (max-width: 999px) {
        font-size: 14px;
    }
`
import styled from "styled-components";

export const PageList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    li {
        margin-left: 1rem;
    }
`

export const PageButton = styled.button`
    padding: 5px;
    font-size: 13px;
    background-color: black;
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    outline: none;
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export const PageButtonActive = styled.button`
    background: none;
    font-weight: bold;
    border: none;
    color: ${props => props.theme.colors.primary};
    font-size: 13px;
    padding: 5px;
    cursor: pointer;
    outline: none;
    &:focus {
        outline: none;
    }
`
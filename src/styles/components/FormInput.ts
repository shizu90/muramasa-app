import styled from 'styled-components'

export const Input = styled.input`
    background-color: black;
    border-radius: 5px;
    width: ${props => props.size}px;
    height: 28px;
    border: 2px solid ${props => props.theme.colors.accent};
    outline: none;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 14px;

    &:focus {
        border: 2px solid ${props => props.theme.colors.primary};
    }
    @media (max-width: 768px) {
        width: ${props => props.size < 200 ? props.size: props.size - 150}px;
    }
`
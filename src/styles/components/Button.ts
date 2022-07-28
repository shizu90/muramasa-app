import styled from 'styled-components'

interface ButtonStyleProps {
    color?: string
    noBg?: boolean
}

export const ButtonStyle = styled.input <ButtonStyleProps>`
    background-color: ${props => props.noBg ? 'transparent' : props.color && props.color.length > 0 ? 
    props.color === 'red' && '#ed1111' || 
    props.color === 'green' && '#23A933' || 
    props.color === 'gray' && '#9e9e9e' || 
    props.color === 'blue' && '#3b54e3': props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    padding: 5px 10px 5px 10px;
    letter-spacing: 1px;
    border-radius: 3px;
    font-weight: 200;
    border: ${props => props.noBg ? props.color && props.color.length > 0 ? 
    props.color === 'red' && '2px solid #ed1111' || 
    props.color === 'green' && '2px solid #23A933' || 
    props.color === 'gray' && '2px solid #9e9e9e' || 
    props.color === 'blue' && '2px solid #3b54e3': `2px solid ${props.theme.colors.primary}`: 'none'};
    cursor: pointer;
    &:hover{
        background-color: ${props => props.noBg ? 'transparent' : props.color && props.color.length > 0 ? 
    props.color === 'red' && '#ed1111' || 
    props.color === 'green' && '#23A933' || 
    props.color === 'gray' && '#9e9e9e' || 
    props.color === 'blue' && '#3b54e3': props.theme.colors.primary}cc;
        color: ${props => props.theme.colors.text}cc;
    }
    @media (max-width: 999px) {
        padding: 8px;
    }
`
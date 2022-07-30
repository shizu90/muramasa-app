import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: ${props => props.theme.colors.accent};
        }
        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.colors.primary};
        }
        &::selection {
            color: ${props => props.theme.colors.text};
            background-color: ${props => props.theme.colors.primary};
        }
    }

    body {
        background: linear-gradient(${props => props.theme.colors.backgroundLight}, ${props => props.theme.colors.background});
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.text};
        min-height: 100vh;
        font: 400 16px Roboto, sans-serif;
    }
`
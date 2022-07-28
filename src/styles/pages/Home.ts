import styled from 'styled-components'

export const HomePage = styled.div`
    margin-top: 63px;
`
export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 200px;
    flex-direction: column;
    h1 {
        color: ${props => props.theme.colors.primary};
        letter-spacing: 4px;
        font-size: 40px;
    }
    h2 {
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 400;
        width: 700px;
        margin-top: 20px;
        @media (max-width: 999px) {
            width: auto;
        }
    }
`
import styled from "styled-components"

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 10%;
    margin-top: 35px;
    padding-bottom: 35px;
    align-items: center;
    text-align: center;
    h4 {
        margin-bottom: 2%;
        letter-spacing: 1.5px;
    }

    ul {
        list-style: none;
        font-size: 30px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
`
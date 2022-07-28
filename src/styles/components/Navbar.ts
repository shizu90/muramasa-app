import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.background}cc;
    padding-top: 1em;
    flex-wrap: wrap;
    width: 100%;
    position: fixed;
    top: 0;
    h1 {
        font-size: 22px;
        padding: 10px;
        letter-spacing: 4px;
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }
`
export const NavbarList = styled.ul`
    list-style: none;
    display: flex;
    letter-spacing: 2px;
    align-items: center;
    li {
        margin-left: 2em;
        div {
            input:first-child {
                margin-right: 10px;
            }
        }
    }
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        li {
            padding-top: 20px;
        }
        width: 100%;
        max-height: ${(props) => props.hidden ? "300px" : "0"};
    }
`

export const NavbarLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`
export const NavbarResponsive = styled.div`
    height: 50px;
    width: 50px;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

export const NavbarProfile = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 35px;
        height: 35px;
        border-radius: 100%;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
`

export const NavbarLogout = styled.div`
    height: 20px;
    width: 20px;
    cursor: pointer;
`
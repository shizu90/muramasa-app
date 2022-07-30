import styled from "styled-components";

export const UserPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    height: 100%;
    hr {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const UserPageHeader = styled.div`
    margin-top: 50px;
    div {
        margin-bottom: 20px;
        img {
            width: 135px;
            height: 135px;
            object-fit: cover;
            border-radius: 100%;
        }
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        font-size: 17px;
        border: 1px solid ${props => props.theme.colors.accent};
        border-radius: 5px;
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        li {
            cursor: pointer;
            margin-right: 20px;
            transition: 150ms ease-out;
            &:hover{
                color: ${props => props.theme.colors.primary}
            }
        }
        li:nth-child(5){
            margin-right: 5rem;
        }
        li:first-child {
            margin-left: 5rem;
        }
    }
    input {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export const UserPageHome = styled.div`
    div {
        display: flex;
        flex-direction: column;
        div {
            margin-top: 10px;
            margin-bottom: 10px;
            p:first-child{
                font-size: 18px;
            }
            p:last-child{
                margin-top: 20px;
                font-size: 15px;
                letter-spacing: 2px;
                font-style: italic;
            }
            ul {
                list-style: none;
                display: flex;
                margin-top: 10px;
                justify-content: center;
                li {
                    cursor: pointer;
                    img{
                        width: 140px;
                        height: 200px;
                        border-radius: 6px;
                        border: 2px solid ${props => props.theme.colors.accent};
                    }
                    margin-right: 5px;
                }
                li:nth-child(6) {
                    margin-right: 0;
                    margin-left: 5px;
                }   
            }
        }
    }
`

export const UserPageList = styled.div`
    ul {
        list-style: none;
    }
    ul:first-child{
        display: flex;
        justify-content: center;
        border: 1px solid ${props => props.theme.colors.accent};
        padding: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 5px;
        li {
            margin-right: 20px;
            cursor: pointer;
            transition: 100ms ease-out;
        }
        li:first-child {
            margin-left: 10px;
            &:hover {
                color: #3ea630;
            }
        }
        li:nth-child(2){
            &:hover{
                color: #2651bf;
            }
        }
        li:nth-child(3){
            &:hover{
                color: ${props => props.theme.colors.primary};
            }
        }
        li:nth-child(4) {
            margin-right: 10px;
            &:hover {
                color: gray;
            }
        }
    }
    ul:last-child {
        display: grid;
        width: 500px;
        li {
            img {
                width: 150px;
            }
        }
    }
`
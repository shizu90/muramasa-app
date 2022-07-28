import styled from "styled-components"

interface PopupContainerProps{
    status: string
}

export const PopupContainer = styled.div<PopupContainerProps>`
    background-color: ${props => props.status === 'success' ? props.theme.colors.success : props.theme.colors.error}cc;
    width: 450px;
    height: auto;
    position: absolute;
    bottom: 10%;
    border-radius: 10px;
    h2 {
        font-size: 18px;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        margin-left: 20px;
        margin-bottom: 15px;
    }

    span {
        padding: 5px;
        float: right;
        font-size: 20px;
        cursor: pointer;
    }
`
import Button from "./Button"
import {PopupContainer} from '../styles/components/Popup'

interface PopUpProps {
    text: string
    title: string
    trigger: boolean
    setTrigger: (...params: any) => void
    status: string
}

export default function PopUp(props: PopUpProps){
    return (
        <>
        {props.trigger ? (
            <PopupContainer status={props.status}>
                <span onClick={() => props.setTrigger(false)}>x</span>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </PopupContainer>
        ): null}
        </>
    )
}
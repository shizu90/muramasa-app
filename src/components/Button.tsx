import {ButtonStyle} from '../styles/components/Button' 

interface ButtonProps {
    color?: string
    noBg?: boolean
    value: string
    type?: any
    onClick?: (...params: any) => void
}

export default function Button(props: ButtonProps) {
    return (
        <ButtonStyle type={props.type} onClick={props.onClick} value={props.value} color={props.color} noBg={props.noBg}>
        </ButtonStyle>
    )
}
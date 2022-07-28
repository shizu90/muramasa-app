import { useState } from "react";
import {Input} from "../styles/components/FormInput";

interface FormInputProps {
    value?: string
    name?: string
    type?: string
    placeholder?: string
    labelName?: string
    errorMessage?: string[]
    pattern?: string
    maxLength?: number
    onChange?: (...params: any) => void
}

export default function FormInput(props: FormInputProps) {
    const [focus, setFocus] = useState<boolean>(false)
    const handleChange = (e) => {
        props.onChange(e)
    }

    const validate = ():boolean => {
        if(props.pattern) return !props.value.match(new RegExp(props.pattern))
    }

    return (
        <>
            <label>{props.labelName}</label>
            <Input 
                value={props.value} 
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={e => handleChange(e)}
                onBlur={e => setFocus(true)}
                size={350}
                maxLength={props.maxLength}/>
            {focus && validate() ? (<span>{props.errorMessage[0]}</span>) : props.errorMessage[1] === "server" ? (<span>{props.errorMessage[0]}</span>) : null}
        </>
    )
}
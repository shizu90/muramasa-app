import {SearchInput} from '../styles/components/SearchInput'
import {useState} from 'react'

interface NumberInputProps {
    maxNumber: number | string
    minNumber: number | string
    size?: number
    onChange?: (...params: any) => void
    value?: number
}

export default function NumberInput(props: NumberInputProps){
    const [displayValue, setDisplayValue] = useState(props.value)

    function handleChange(event: any){
        setDisplayValue(parseInt(event.target.value))
        props.onChange(parseInt(event.target.value))
    }

    return (
        <SearchInput size={props.size} type={'number'} max={props.maxNumber} min={props.minNumber} value={displayValue} onChange={(e) => handleChange(e)}/>
    )
}
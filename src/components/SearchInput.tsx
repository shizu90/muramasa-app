import {useState} from 'react'
import useDebounce from '../hooks/useDebounce'
import {SearchInput} from '../styles/components/SearchInput'

interface InputProps{
    value?: string
    setValue?: (...params) => void
    type: 'submit' | 'text'
    placeHolder?: string
    children?: any,
    size?: number 
}

export default function Input(props: InputProps){
    const [displayValue, setDisplayValue] = useState(props.value)
    const debouncedChange = useDebounce(props.setValue, 500)
    
    function handleChange(event){
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }
    return (
        <SearchInput size={props.size} type={props.type} placeholder={props.placeHolder} onChange={handleChange} value={displayValue}>
        </SearchInput>
    )
}
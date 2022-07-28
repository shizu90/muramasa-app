import {SelectBox} from '../styles/components/Select'
import {useState} from 'react'
import useCapitalize from '../hooks/useCapitalize'

interface SelectProps{
    options: string[]
    children?: any
    onChange?: (...params: any) => void
    value?: string
}

export default function Select(props: SelectProps){
    const {capitalize} = useCapitalize()
    const [displayValue, setDisplayValue] = useState<string>(props.value ? capitalize(props.value) : props.value)
    function handleChange(event: any){
        props.onChange(event.target.value)
        setDisplayValue(event.target.value)
    }

    return (
        <SelectBox onChange={handleChange} value={displayValue}>
            {props.options.map((item, i) => (
                <option key={`options-${i}`}>
                    {item}
                </option>
            ))}
        </SelectBox>
    )
}
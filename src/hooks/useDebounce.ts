import { useRef } from "react";

export default function useDebounce(func, delay) {
    const timeOutRef = useRef(null)

    function debouncedFunction(...args) {
        window.clearTimeout(timeOutRef.current)
        timeOutRef.current = window.setTimeout(() => {
            func(...args)
        }, delay)
    }

    return debouncedFunction
}
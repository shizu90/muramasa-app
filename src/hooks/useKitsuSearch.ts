import { useState} from "react";

const LIMIT = 18

export default function useKitsuSearch() {
    const [media, setMedia] = useState<string>('anime')
    const [season, setSeason] = useState<string>('Winter')
    const [text, setText] = useState('')
    const [info, setInfo] = useState({data: null, meta: null})
    const [offset, setOffset] = useState(0)

    const baseURL = `https://kitsu.io/api/edge` 

    const changeMedia = (string: string) => {
        setMedia(string)
    }

    const changeSeason = (string: string) => {
        setSeason(string)
    }

    return {
        media,
        changeMedia,
        season, 
        changeSeason,
        text, 
        setText,
        info,
        setInfo,
        offset, 
        setOffset,
        LIMIT,
        baseURL
    }
}
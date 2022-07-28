import Input from "../components/SearchInput"
import Select from "../components/Select"
import { SearchContainer, SearchHandler, SearchResult } from "../styles/pages/Search"
import useKitsuSearch from "../hooks/useKitsuSearch"
import qs from 'qs'
import { useEffect } from "react"
import useDate from "../hooks/useDate"
import Pagination from "../components/Pagination"
import MediaList from "../components/mediaList"
import Button from "../components/Button"
import Head from "next/head"

export default function Seasons() {
    const {
        season, changeSeason, 
        text, setText, 
        info, setInfo, 
        offset, setOffset, 
        LIMIT, baseURL
    } = useKitsuSearch()

    const {
        currentSeason,
        currentYear
    } = useDate()
    function currentAnimeSeason(season: string, year: number) {
        setText(year.toString())
        changeSeason(season)
    }
    useEffect(() => {
        setInfo({data: null, meta: null})
        const query = {
            page: {
                limit: LIMIT,
                offset: offset
            }
        }
        if(text && season && text.match(/^\d+$/)){
            fetch(`${baseURL}/anime?filter[season]=${season.toLowerCase()}&filter[seasonYear]=${text}&${qs.stringify(query)}`, {})
            .then(res => res.json()).then(res => setInfo(res))    
        }else{
            fetch(`${baseURL}/anime?filter[season]=${currentSeason.toLowerCase()}&filter[seasonYear]=${currentYear}&${qs.stringify(query)}`)
            .then(res => res.json()).then(res => setInfo(res))
        }
    }, [text, season, offset])
    return (
        <SearchContainer>
            <Head>
                <title>Muramasa - seasons</title>
            </Head>
            <SearchHandler>
                <Input type={"text"} value={text} setValue={setText} size={100}/>
                <Select options={['Winter', 'Spring', 'Summer', 'Fall']} onChange={(e) => changeSeason(e.target.value)}></Select>
                <Button type="button" onClick={() => currentAnimeSeason(currentSeason, currentYear)} value={'Current'}></Button>
            </SearchHandler>
            <SearchResult>
                {info.data ? (
                    <MediaList apiResponse={info}/> 
                ) : (
                    <span>Loading...</span>
                )}
            </SearchResult>
            {info.data && (
                <Pagination limit={LIMIT} total={info.meta.count} offset={offset} setOffset={setOffset}></Pagination>
            )}
        </SearchContainer>
    )
}
import Input from "../components/SearchInput"
import Select from "../components/Select"
import { SearchContainer, SearchHandler, SearchResult } from "../styles/pages/Search"
import MediaList from "../components/mediaList"
import Pagination from "../components/Pagination"
import { useEffect } from "react"
import useKitsuSearch from '../hooks/useKitsuSearch'
import Head from "next/head"
import qs from 'qs'

export default function Search() {

    const {
        media, changeMedia, 
        text, setText, 
        info, setInfo, 
        offset, setOffset, 
        LIMIT, baseURL
    } = useKitsuSearch()

    useEffect(() => {
        setInfo({data: null, meta: null})
        const query: {[k: string]: any} = {
            page: {
                limit: LIMIT,
                offset: offset
            }
        }
        if (text) {
            query.filter = {
                text: text
            }
        }
        fetch(`${baseURL}/${media.toLowerCase()}?${qs.stringify(query)}`)
        .then(res => res.json())
        .then(res => setInfo(res))    
    }, [text, media, offset])

    return (
        <SearchContainer>
            <Head>
                <title>Muramasa - search</title>
            </Head>
            <SearchHandler>
                <Input size={400} type="text" placeHolder = {'Type an anime or manga'}setValue={setText} value={text}/>
                <Select options={['Anime', 'Manga']} onChange={changeMedia}/>
            </SearchHandler>
            <SearchResult>
                {info.data && (
                    <MediaList apiResponse={info}/> 
                )}
                
            </SearchResult>
            {info.data && (
                <Pagination limit={LIMIT} total={info.meta.count} offset={offset} setOffset={setOffset}/>    
            )}
        </SearchContainer>
    )
}
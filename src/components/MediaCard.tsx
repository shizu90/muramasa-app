import {FaCalendarAlt, FaList, FaTv, FaRegHeart, FaHeart} from 'react-icons/fa'
import {Card, InfoContainer, StatusList, FavoriteStatus} from '../styles/components/mediaCard'
import useCapitalize from '../hooks/useCapitalize'
import useDate from '../hooks/useDate'
import useApi from '../hooks/useApi'
import Media from '../core/Media'
import Button from './Button'
import {useState, useEffect} from 'react'
import Select from './Select'
import NumberInput from './NumberInput'
import mediaCardGeneral from '../modules/mediaCard'

interface MediaCardProps {
    data: {attributes: any, type: any, id: any}
}

export default function MediaCard(props: MediaCardProps) {
    const {capitalize} =  useCapitalize()
    const {getWeekday} = useDate()
    const {getMediaInList, status} = useApi()
    const {changeCount, changeStat, addToList, deleteFromList, setFavorite, showMore, updateList} = mediaCardGeneral()
    const [show, setShow] = useState<boolean>(false)
    const [list, setList] = useState<boolean>(false)
    const [media, setMedia] = useState<Media>()
    const [favorited, setFavorited] = useState<boolean>(false)
    const responsive = window.matchMedia("(max-width: 999px)")
    const currentSession = JSON.parse(localStorage.getItem('session'))
    
    useEffect(() => {  
        if(currentSession !== null || currentSession){
            getMediaInList(currentSession.token, props.data.id, props.data.type)
            .then(res => {
                const dataToStore = {
                    image: props.data.attributes.posterImage.large, 
                    countLength: props.data.attributes.episodeCount | props.data.attributes.chapterCount, 
                    title: props.data.attributes.canonicalTitle
                }
                if(res.status === "error"){
                    setMedia(new Media(dataToStore, false, props.data.id, 'watching', props.data.type, 0))
                    setList(false)
                }else{
                    setMedia(new Media(dataToStore, res.message.favorited, res.message.id, res.message.progress, props.data.type, res.message.count))
                    setFavorited(res.message.favorited)
                    setList(true)
                }
            })
        }else{
            const dataToStore = {
                image: props.data.attributes.posterImage.large, 
                countLength: props.data.attributes.chapterCount | props.data.attributes.episodeCount, 
                title: props.data.attributes.canonicalTitle
            }
            setMedia(new Media(dataToStore, false, props.data.id, '', props.data.type, 0))
        }
    }, [])
    function count(current: number){
        changeCount(current, media)
    }
    function stat(current: string){
        changeStat(media, current)
    }
    return (
        <Card>
            {media?(
                <>
                    <img src={props.data.attributes.posterImage.large ? props.data.attributes.posterImage.large : '/no-image.png'}></img>
                    <InfoContainer>
                        <h1>{props.data.attributes.canonicalTitle}</h1>
                        <h2>{
                            props.data.attributes.averageRating === null ? 
                            'N/A' 
                            : (props.data.attributes.averageRating/10).toFixed(2)
                        }</h2>
                        <hr/>
                        {currentSession? (
                            <>
                                {favorited?
                                <FavoriteStatus onClick={() => setFavorite(media, 'delete', currentSession.token, favorited, setFavorited)}>
                                    <FaHeart></FaHeart>
                                    <p>Remove from favorites</p>    
                                </FavoriteStatus>:
                                <FavoriteStatus onClick={() => setFavorite(media, 'add', currentSession.token, favorited, setFavorited)}>
                                    <FaRegHeart></FaRegHeart>
                                    <p>Add to favorites</p>
                                </FavoriteStatus>}
                            </>
                        ): <p>Login to favorite</p>}
                        <hr/>
                        {responsive.matches ? (
                            <>    
                                <p>
                                    {props.data.attributes.synopsis.slice(0, 359)}
                                    <span hidden={show}>...</span>
                                    <span hidden={!show}>{props.data.attributes.synopsis.slice(359)}</span>
                                </p>
                                <Button type="button" onClick={() => showMore(show, setShow)} value={show? 'Read less' : 'Read more'}></Button>
                            </>
                        ) : (
                            <p>{props.data.attributes.synopsis}</p>
                        )}
                        <hr/>
                        <StatusList>
                            <li>
                                <div>
                                    <FaTv></FaTv>
                                </div>
                                <p>
                                    {capitalize(props.data.attributes.subtype)}
                                </p>
                            </li>
                            <li>
                                <div>
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <p>
                                        {props.data.attributes.status === 'current' && props.data.type === 'anime' ? 
                                        `Airing on ${getWeekday(props.data.attributes.startDate)}s` 
                                        : capitalize(props.data.attributes.status)}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <FaList></FaList>
                                </div>
                                <p>
                                    {props.data.attributes.episodeCount || props.data.attributes.chapterCount}
                                </p>
                            </li> 
                        </StatusList>
                            {currentSession? (
                            <>
                                {props.data.attributes.subtype === 'manga' ? 
                                <Select options={['Reading', 'Completed', 'Dropped', 'Plans']} onChange={stat} value={media.progress}/>
                                : <Select options={['Watching', 'Completed', 'Dropped', 'Plans']} onChange={stat} value={media.progress}/>}
                                <NumberInput 
                                maxNumber={props.data.attributes.episodeCount | props.data.attributes.chapterCount ? props.data.attributes.episodeCount | props.data.attributes.chapterCount : undefined} 
                                minNumber={0} 
                                size={80} onChange={count}
                                value={media.count}
                                ></NumberInput>
                                {!list? (
                                    <Button type="button" onClick={() => addToList(media, currentSession.token, list, setList)} value={"Add"}></Button>
                                ): (
                                    <>
                                        <Button type="button" onClick={() => deleteFromList(media, currentSession.token, list, setList)} value={"Delete"}></Button>
                                        <Button type="button" onClick={() => updateList(media, currentSession.token, list, setList)} value={"Update"}></Button>
                                    </>
                                )}
                                
                            </>): null}
                            <hr></hr>
                    </InfoContainer>
                </>
            ): null}
        </Card>
    )
}
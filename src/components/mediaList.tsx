import {MediaGrid} from '../styles/components/MediaList'
import Link from 'next/link'

interface MediaListProps {
    apiResponse: {data?: any, meta?: any}
}

export default function MediaList(props: MediaListProps){
    return (
        <MediaGrid>
            {props.apiResponse.data.length === 0 ? (
                <span>Cannot find data from that input</span>
            ) : (
                props.apiResponse.data.map((item: any) => 
                    (
                    <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                        <li key={item.id}>
                            <img src={item.attributes.posterImage.large ? item.attributes.posterImage.large : '/no-image.png'}/>
                            <p>{item.attributes.canonicalTitle}</p>
                        </li>
                    </Link>
                    )
                )
            )}
        </MediaGrid>
    )
}
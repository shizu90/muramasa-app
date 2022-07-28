import { SingleViewPage } from "../styles/pages/singleView"
import MediaCard from "../components/MediaCard"
import { useEffect, useState} from "react"
import { useRouter } from "next/router"
import useKitsuSearch from "../hooks/useKitsuSearch"
import { ErrorScreen } from "../styles/components/ErrorScreen"
import Head from "next/head"

export default function SingleView(){
    const [data, setData] = useState<any>()
    const {baseURL} = useKitsuSearch()
    const router = useRouter()

    useEffect(() => {
        if(router.isReady){
            if(data === undefined) {
                fetch(`${baseURL}/anime/${router.query.id}`)
                .then(res => res.json()).then(res => setData(res))
            }
        }
            
    }, [data, router.isReady])

    return (
       <SingleViewPage>
            <Head>
                {data ? (
                    <title>{data.data.attributes.canonicalTitle} - Anime</title>
                ) :
                    <title>Loading</title>
                }
            </Head>
                {data ? (
                    <>
                    {data.errors ? (
                        <ErrorScreen>
                            <p>404</p>
                            <p>Cannot find that media</p>
                        </ErrorScreen>
                    ) : (
                        <>
                            <MediaCard data={data.data}></MediaCard>
                        </>
                    )}
                    </>
                ): (
                    <p>Loading...</p>
                )}
       </SingleViewPage> 
    )
}
import {UserPage, UserPageHeader, UserPageHome, UserPageList} from '../styles/pages/User'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useApi from '../hooks/useApi'
import { MediaGrid } from '../styles/components/MediaList'
import Link from 'next/link'
import Button from '../components/Button'
import { ErrorScreen } from '../styles/components/ErrorScreen'
import Head from 'next/head'
import { FaStar } from 'react-icons/fa'

export default function UserProfile(){
    const [user, setUser] = useState<any>(undefined)
    const {getUserByParam, getUserEquals} = useApi()
    const [page, setPage] = useState<string>('home')
    const [stat, setStat]= useState<string>(page === 'animeList' ? 'watching' : 'reading')
    const [match, setMatch] = useState<any>()
    const router = useRouter()
    
    useEffect(() => {
        if(router.isReady){
            const currentSession = JSON.parse(localStorage.getItem('session'))
            if((user === undefined || match === undefined) || user.UID !== router.query.id){
                getUserByParam(router.query.id)
                .then(res => {
                    if(res.status === 'error'){
                        setUser({msg: '404'})
                    }else{
                        setUser(res.message)
                    }
                })
                if(currentSession){
                    getUserEquals(router.query.id, currentSession.token)
                    .then(res => setMatch(res))
                }
            }   
        }
        
    }, [user, router.isReady, stat, match, router.query.id])
 
    function setAnimeList(){
        setPage('animeList')
        setStat('watching')
    }
    function setMangaList(){
        setPage('mangaList')
        setStat('reading')
    }
    return (
        <UserPage>
            <Head>
                {user ? (
                    <title>{user.username}'s profile - Muramasa</title>
                ) : (
                    <title>Loading</title>
                )}
            </Head>
            {user ? (
                <>
                    <UserPageHeader>
                        <div>
                            <img src={(user.propic && user.propic.url) || "/nopropic.png"}></img>
                        </div>
                        <div>
                            <h1>{user.username}</h1>
                        </div>
                        {user.bio ? (
                            <p>{user.bio.replaceAll('      ', '\n').split('\n').map((item: any) => (
                                <span key={item}>    
                                    {item}
                                    <br/>
                                </span>
                            ))}</p>
                        ) : (null)}
                        {match && match.message ?(
                            <Button type="button" onClick={() => router.push({pathname: `/settings/`, query: {id: user.UID}})}value='Settings'></Button>
                        ) : (null)}
                        <ul>
                            <li onClick={() => setPage('home')}>Home</li>
                            <li onClick={() => setAnimeList()}>Anime list</li>
                            <li onClick={() => setMangaList()}>Manga list</li>
                            <li onClick={() => setPage('followers')}>Followers</li>
                            <li onClick={() => setPage('following')}>Following</li>
                        </ul>
                    </UserPageHeader>
                    {page === 'home' ? (
                        <UserPageHome>
                            <div>
                                <div>
                                    <p>Favorite animes</p>
                                    {user && user.favoritesAnime.length > 0 ? (
                                        <ul>
                                            {user.favoritesAnime.map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>This user favorited anything</p>
                                    )}
                                </div>
                                <div>
                                    <p>Favorite mangas</p>
                                    {user && user.favoritesManga.length > 0 ? (
                                        <ul>
                                            {user.favoritesManga.map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>This user favorited anything</p>
                                    )}
                                </div>
                            </div>
                    </UserPageHome>
                    ) : page === 'animeList' ? (
                        <UserPageList>
                            <ul>
                                <li onClick={() => setStat('watching')}>Watching</li>
                                <li onClick={() => setStat('completed')}>Completed</li>
                                <li onClick={() => setStat('dropped')}>Dropped</li>
                                <li onClick={() => setStat('plans')}>Plans</li>
                            </ul>
                            {stat === 'watching' ? 
                                (
                                    <MediaGrid>
                                        {user && user.animeList['watching'].length > 0 ? 
                                            user.animeList['watching'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        <span>{item.count}/{item.data.countLength === 0 ? '?' : item.data.countLength}</span>
                                                        <br/>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'completed' ? 
                                (
                                    <MediaGrid>
                                        {user && user.animeList['completed'].length > 0 ? 
                                            user.animeList['completed'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'dropped' ? 
                                (
                                    <MediaGrid>
                                        {user && user.animeList['dropped'].length > 0 ? 
                                            user.animeList['dropped'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        <span>{item.count}/{item.data.countLength === 0 ? '?' : item.data.countLength}</span>
                                                        <br/>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'plans' ? 
                                (
                                    <MediaGrid>
                                        {user && user.animeList['plans'].length > 0 ? 
                                            user.animeList['plans'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                (
                                    <p>Something gone wrong, restart the page</p>
                                )
                            }
                        </UserPageList>
                    ) : page === 'mangaList' ? (
                        <UserPageList>
                            <ul>
                                <li onClick={() => setStat('reading')}>Reading</li>
                                <li onClick={() => setStat('completed')}>Completed</li>
                                <li onClick={() => setStat('dropped')}>Dropped</li>
                                <li onClick={() => setStat('plans')}>Plans</li>
                            </ul>
                            {stat === 'reading' ? 
                                (
                                    <MediaGrid>
                                        {user && user.mangaList['reading'].length > 0 ? 
                                            user.mangaList['reading'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        <span>{item.count}/{item.data.countLength === 0 ? '?' : item.data.countLength}</span>
                                                        <br/>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'completed' ? 
                                (
                                    <MediaGrid>
                                        {user && user.mangaList['completed'].length > 0 ? 
                                            user.mangaList['completed'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'dropped' ? 
                                (
                                    <MediaGrid>
                                        {user && user.mangaList['dropped'].length > 0 ? 
                                            user.mangaList['dropped'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        <span>{item.count}/{item.data.countLength === 0 ? '?' : item.data.countLength}</span>
                                                        <br/>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                stat === 'plans' ? 
                                (
                                    <MediaGrid>
                                        {user && user.mangaList['plans'].length > 0 ? 
                                            user.mangaList['plans'].map((item: any) => (
                                                <Link href={{pathname: `/${item.type}/`, query: {id: item.id}}} key={item.id}>
                                                    <li key={item.id}>
                                                        <img src={item.data.image}></img>
                                                        <p>{item.data.title}</p>
                                                        {item.rating?(<span><FaStar/>{item.rating}</span>):null}
                                                    </li>
                                                </Link>
                                            ))
                                         : (
                                            <p>Nothing here</p>
                                        )}
                                    </MediaGrid>
                                )
                                :
                                (
                                    <p>Something gone wrong, restart the page</p>
                                )
                            }
                        </UserPageList>
                    ) : page === 'followers' ? (
                        <h1>Under construction</h1>
                    ) : (<h1>Under construction</h1>)}
                </>
            ) : (
                <ErrorScreen>
                    <p>404</p>
                    <p>Cannot find this user</p>
                </ErrorScreen>
            )}
        </UserPage>
    )
}
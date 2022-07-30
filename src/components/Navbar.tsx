import {NavbarContainer, 
    NavbarList, 
    NavbarResponsive, 
    NavbarProfile, 
    NavbarLink, 
    NavbarLogout
} from '../styles/components/Navbar'
import Button from './Button'
import {useState, useEffect} from 'react'
import Link from "next/link"
import useApi from '../hooks/useApi'
import { useRouter } from 'next/router'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState<any>()
    const {getUserByParam} = useApi()
    const [currentSession, setCurrentSession] = useState({token: undefined, UID: undefined})
    const router = useRouter()

    function logout(){
        localStorage.removeItem('session')
        window.location.reload()
    }

    useEffect(() => {
        const current = JSON.parse(localStorage.getItem('session'))
        if(current && !currentSession.token) setCurrentSession(current)
        if((!user && currentSession.token) || (user && user.propic && user.propic.url)) getUserByParam(currentSession.token).then(res => setUser(res.message))
    }, [currentSession, user])

    return (
        <NavbarContainer>
            <Link href='/'>
                <NavbarLink>
                    <h1>MURAMASA</h1>   
                </NavbarLink>
            </Link>
            
            <NavbarResponsive onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </NavbarResponsive>
            <NavbarList hidden = {open}>
                <li>
                    <Link href={`/search`}>
                        <NavbarLink>
                            Search
                        </NavbarLink>
                    </Link>
                </li>
                <li>
                    <Link href={`/seasons`}>
                        <NavbarLink>
                            Seasons
                        </NavbarLink>
                    </Link>
                </li>
                <li>
                    <Link href={`/community`}>
                        <NavbarLink>
                            Community
                        </NavbarLink>
                    </Link>
                </li>
                {currentSession && user? (
                    <li>
                        <NavbarProfile>
                            <Link href={{pathname: `/user/`, query: {id: currentSession.UID}}} key={currentSession.UID}>
                                <NavbarProfile>
                                    <NavbarLink>
                                        Profile
                                    </NavbarLink> 
                                    <img src={(user.propic && user.propic.url)|| "/nopropic.png"}></img>   
                                </NavbarProfile>
                            </Link>
                            <NavbarLogout onClick={() => logout()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </NavbarLogout>
                        </NavbarProfile>
                    </li>
                ) : (
                    <li>
                        <div>
                            <Button value={"Sign up"} onClick={() => router.push("/register")}type={"button"}></Button>
                            <Button value={"Login"} onClick={() => router.push("/login")}type={"button"}></Button>
                        </div>
                    </li>
                )}
                
            </NavbarList>
        </NavbarContainer>         
    ) 
}
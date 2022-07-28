import FormInput from '../components/FormInput'
import {SettingsPage, PenIcon} from '../styles/pages/settings'
import { ErrorScreen } from '../styles/components/ErrorScreen' 
import useApi from '../hooks/useApi'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Settings() {
    const [session, setSession] = useState<any>()
    const [username, setUsername] = useState<string>("")
    const [user, setUser] = useState<any>(undefined)
    const [bio, setBio] = useState<string>("")
    const [propic, setPropic] = useState<any>('')
    const {getUserByParam, updateUserInfo, sendUpload} = useApi()
    const router = useRouter()

    useEffect(() => {
        const currentSession = JSON.parse(localStorage.getItem('session'))
        setSession(currentSession)
        getUserByParam(currentSession.token)
        .then(res => {
            setUser(res.message)
            if(username === undefined){
                setUsername("")
            }else{
                setUsername(res.message.username)
            }
            if(bio === undefined){
                setBio("")
            }else{
                setBio(res.message.bio)
            }
        })
    }, [user])
    function saveSettings(newUsername: string, newBio: string, e){
        e.preventDefault()
        if(session){
            updateUserInfo(session.token, newUsername, newBio)
            router.push({pathname: "/user/", query: {id: user.UID}})
        }
    }
    function handleChangeUsername(e: any) {
        setUsername(e.target.value)
    }
    function handleBack() {
        router.back()
    }

    function handlePropic(e: any) {
        sendUpload(session.token, e.target.files[0]);
    }

    return (
        <SettingsPage>
            {session && user? (
                <form onSubmit={(e) => saveSettings(username, bio, e)}>
                    <div>
                        <FormInput 
                        type = {'text'} 
                        placeholder={'Change username'} 
                        value={username} 
                        onChange={handleChangeUsername} 
                        pattern={"^[A-Za-z0-9\s]{2,14}$"}
                        labelName={"Username: "}
                        errorMessage={[`Username max length is 14, current length: ${username.length}`, "client"]}></FormInput>
                        <label>Bio: </label>
                        <textarea placeholder={'Change bio'} maxLength={390} onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                    </div>
                    <div>
                        <img src={(user.propic && user.propic.url) || "/nopropic.png"}></img>
                        <label>
                            Change propic
                            <input type='file' onChange={(e) => handlePropic(e)}></input>
                        </label>
                        <Button type="submit" value={'Save'}></Button>
                        <Button type="button" value={'Back'} onClick={() => handleBack()} noBg={true}></Button>
                    </div>
                </form>
            ) : (
                <ErrorScreen>
                    <p>400</p>
                    <p>Unreachable page</p>
                </ErrorScreen>
            )}
        </SettingsPage>
    )
}
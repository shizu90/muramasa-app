import FormInput from '../components/FormInput'
import {SettingsPage, PenIcon} from '../styles/pages/settings'
import { ErrorScreen } from '../styles/components/ErrorScreen' 
import useApi from '../hooks/useApi'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useRouter } from 'next/router'
import { blob } from 'stream/consumers'

export default function Settings() {
    const [session, setSession] = useState<any>()
    const [username, setUsername] = useState<string>("")
    const [user, setUser] = useState<any>(undefined)
    const [bio, setBio] = useState<string>("")
    const [propic, setPropic] = useState<any>('')
    const [file, setFile] = useState<any>()
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
    }, [user, bio])
    function saveSettings(newUsername: string, newBio: string, e){
        e.preventDefault()
        if(session){
            updateUserInfo(session.token, newUsername, newBio)
            if(file) sendUpload(session.token, file)
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
        const file = e.target.files[0]
        setFile(file)
        const path = new FileReader()
        path.onloadend = function() {setPropic(path.result)}
        if(file instanceof Blob)path.readAsDataURL(file)
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
                        <img src={propic || ((user.propic && user.propic.url)) || "/nopropic.png"}></img>
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
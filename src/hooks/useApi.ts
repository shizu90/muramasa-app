import Media from "../core/Media"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { UserContextType } from "../context/@types/user"
import useCapitalize from "./useCapitalize"

export default function UseApi() {
    const {capitalize} = useCapitalize();
    const {status, setStatus} = useContext(UserContext) as UserContextType;

    async function register(email: string, password: string, passwordConfirm: string, username: string) {
        return fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
                username: username
            })
        }).then(res => res.json()).then(res => { setStatus(res) });
    };

    async function login(email: string, password: string) {
        return fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(res => {
            if(res.status === "success"){
                localStorage.setItem("session", JSON.stringify(res));
                setStatus(res);
            }else{
                setStatus(res);
            }
        });
    };

    async function getAllUsers() {
        return fetch("http://localhost:8080/users", {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getUserByParam(param: string | string[]) {
        return fetch(`http://localhost:8080/users/${param}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getUserAnimelist(param: string) {
        return fetch(`http://localhost:8080/users/animelist/${param}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getUserMangaList(param: string) {
        return fetch(`http://localhost:8080/users/mangalist/${param}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getUserFavorites(param: string) {
        return fetch(`http://localhost:8080/users/favorites/${param}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getMediaInList(param: string, mediaId: number, mediaType: string) {
        return fetch(`http://localhost:8080/users/list/${mediaType}/${param}/${mediaId}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function getUserEquals(userId: string | string[], token: string) {
        return fetch(`http://localhost:8080/utils/users/equals/${userId}/${token}`, {
            method: "GET"
        }).then(res => res.json()).then(res => {return res});
    };

    async function updateUserInfo(param: string, username?: string, bio?: string, propic?: string) {
        return fetch(`http://localhost:8080/users/${param}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                bio,
                propic
            })
        }).then(res => res.json()).then(res => setStatus(res));
    };

    function updateUserAnimelist(param: string, media: Media, method: "add" | "delete" | "update") {
        const dataToStore = {
            id: media.id,
            type: media.type,
            progress: media.progress,
            favorited: media.favorited,
            count: media.count,
            data: {image: media.data.image, countLength: media.data.countLength, title: media.data.title}
        }
        console.log(param)
        fetch(`http://localhost:8080/users/animelist/${param}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                media: dataToStore,
                method
            })
        }).then(res => res.json())
    };
    
    async function updateUserMangalist(param: string, media: Media, method: "add" | "delete" | "update") {
        const dataToStore = {
            id: media.id,
            type: media.type,
            progress: media.progress,
            favorited: media.favorited,
            count: media.count,
            data: {image: media.data.image, countLength: media.data.countLength, title: media.data.title}
        }
        return fetch(`http://localhost:8080/users/mangalist/${param}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                media: dataToStore,
                method
            })
        }).then(res => res.json()).then(res => setStatus(res));
    };

    async function updateUserFavorites(param: string, media: Media, method: "add" | "delete") {
        const dataToStore = {
            id: media.id,
            type: media.type,
            progress: media.progress,
            favorited: media.favorited,
            count: media.count,
            data: {image: media.data.image, countLength: media.data.countLength, title: media.data.title}
        }
        return fetch(`http://localhost:8080/users/favorites/${param}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                media: dataToStore,
                method
            })
        }).then(res => res.json()).then(res => setStatus(res));
    }

    async function sendUpload(param: string, file: any) {
        const data = new FormData();
        data.append("file", file);
        
        fetch(`http://localhost:8080/utils/upload/${param}`, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: data
        });
    };

    return {
        register,
        login,
        getAllUsers,
        getUserByParam,
        getUserAnimelist,
        getUserMangaList,
        getUserFavorites,
        getUserEquals,
        getMediaInList,
        updateUserAnimelist,
        updateUserMangalist,
        updateUserFavorites,
        updateUserInfo,
        sendUpload,
        status,
    }
}
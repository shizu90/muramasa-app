import Media from "../core/Media"
import useApi from "../hooks/useApi"

export default function mediaCardGeneral(){
    const {updateUserAnimelist, updateUserFavorites, updateUserMangalist} = useApi()
    function addToList(media: Media, token: string, list?: boolean, setList?: (...params: any) => void){
        if(media.type === "anime") {
            updateUserAnimelist(token, media, "add");
        }else{
            updateUserMangalist(token, media, "add");
        }     
        setList(true);
    }
    function deleteFromList(media: Media, token: string, list?: boolean, setList?: (...params: any) => void){
        if(media.type === "anime") {
            updateUserAnimelist(token, media, "delete");
        }else{
            updateUserMangalist(token, media, "delete");
        }
        setList(false);
    }

    function updateList(media: Media, token: string, list?: boolean, setList?: (...params: any) => void) {
        if(media.type === "anime") {
            updateUserAnimelist(token, media, "update");
        }else{
            updateUserMangalist(token, media, "update");
        }
    }

    function changeCount(currentCount: number, media: Media){
        media.count = currentCount
    }
    function changeRating(currentRating: number, media: Media){
        media.rating = currentRating
    }
    function setFavorite(media: Media, method: "add" | "delete", token: string, favorited?: boolean, setFavorited?: (...params: any) => void){
        media.favorited = true;
        updateUserFavorites(token, media, method);
        setFavorited(!favorited);
    }
    function changeStat(media: Media, stat: string){
        media.progress = stat.toLowerCase()
    }
    function showMore(show: boolean, setShow: (...params: any) => void){
        setShow(!show)
    }
    return {
        addToList,
        deleteFromList,
        changeCount,
        setFavorite,
        changeStat,
        changeRating,
        showMore,
        updateList
    }
}
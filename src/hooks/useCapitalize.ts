
export default function useCapitalize(){
    function capitalize(string: string){
        if(string.length > 1){
            const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)
            return capitalizedString  
        }else{
            return string
        }
    }
    return {
        capitalize
    }
}


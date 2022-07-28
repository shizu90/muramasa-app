import { createContext, useState} from "react"
import { UserContextType } from "./@types/user"

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider = ({children}) => {
    const [status, setStatus] = useState<any>()
    
    return (
        <UserContext.Provider value={{ 
            status, setStatus
        }}>
        {children}
        </UserContext.Provider>
    )

}
export default UserProvider
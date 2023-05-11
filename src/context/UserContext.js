import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState({});
    // const [indate, setIndate]= useState('');
    // const [outdate,setOutdate]=useState('');    

return (
    <UserContext.Provider value = {{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContext;
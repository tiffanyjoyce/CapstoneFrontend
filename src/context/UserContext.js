import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [user, setUser] = useState({});
    // const [indate, setIndate]= useState('');
    // const [outdate,setOutdate]=useState('');    

    // useEffect(()=>{
    //     console.log(user)
    // }, [user])
return (
    <UserContext.Provider value = {{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}

export default UserContext;
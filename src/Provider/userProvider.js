
import { useState } from "react";
import UserContext from "./userContext";

function UserProvider(props){

const[user,setUser]=useState(null)
    return(
       <UserContext.Provider value={{
        user:user,
        setUser:setUser
    }}>{props.children}</UserContext.Provider>
    
    )
}

export default UserProvider;
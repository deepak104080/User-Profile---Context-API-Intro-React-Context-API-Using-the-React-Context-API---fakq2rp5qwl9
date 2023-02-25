import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{

    let localContext = useContext(UserContext);

    return(
        <>
            <h1 id="name">{localContext.name}</h1>
            <h1 id="age">{localContext.age}</h1>
        </>
    )

}

export {UserProfile}
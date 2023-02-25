import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{

    let localContext = useContext(UserContext);

    return(
        <>
            <h1 id="name">Name:- {localContext.name}</h1>
            <h1 id="age">Age:- {localContext.age}</h1>
        </>
    )

}

export {UserProfile}
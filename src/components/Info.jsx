import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContextProvider'

const Info = () => {
    const { user, updateUser } = useContext(GlobalContext)
    return (
        <>
        <div>Info</div>
        <p>User: {user}</p>
        </>
    )
}

export default Info
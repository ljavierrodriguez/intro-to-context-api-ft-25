import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContextProvider'
import Info from '../components/Info'

const About = () => {

    const { user, updateUser } = useContext(GlobalContext)

    return (
        <>
            <div>About</div>
            <p>User: {user}</p>
            <Info />
        </>
    )
}

export default About
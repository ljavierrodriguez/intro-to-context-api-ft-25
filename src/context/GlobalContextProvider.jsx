import React, { createContext, useCallback, useEffect, useState } from 'react'


export const GlobalContext = createContext()


const GlobalContextProvider = ({ children }) => {

    const [user, setUser] = useState("anonimous")

    const [posts, setPosts] = useState(null)

    const updateUser = useCallback(() => {
        setUser("lrodriguez")
    })

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => setPosts(responseJson))
    }

    return (
        <GlobalContext.Provider value={{ user, updateUser, posts }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
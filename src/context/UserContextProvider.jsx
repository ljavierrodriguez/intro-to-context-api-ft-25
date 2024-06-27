import React, { createContext, useCallback, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null
    })

    const login = useCallback(() => {
        setUser({ email: 'lrodriguez@4geeks.co' })
    })

    const logout = useCallback(() => {
        setUser({ email: null })
    })

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
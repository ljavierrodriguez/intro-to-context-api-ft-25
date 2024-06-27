import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContextProvider'

const Menu = () => {
    const { user: usuario, login, logout } = useContext(UserContext)
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            {
                !!usuario.email ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#">{usuario?.email}</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={logout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <button className="nav-link" onClick={login}>Login</button>
                        </li>
                    </>
                )
            }

        </ul>
    )
}

export default Menu
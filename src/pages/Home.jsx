import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContextProvider'
import { Context } from '../store/AppContext'

const Home = () => {
    const { user, updateUser } = useContext(GlobalContext)
    const { store, actions } = useContext(Context)

    return (
        <>
        <div>Hola, Bienvenido {store?.currentUser?.name} </div>
        <p>User: {user}</p>
        <button className="btn btn-primary btn-sm" onClick={updateUser}>Cambiar Usuario</button>
        <button className="btn btn-primary btn-sm" onClick={actions.ejecutarAction}>Ejecutar Saludar</button>
        <button className="btn btn-primary btn-sm" onClick={actions.login}>Login</button>
        <button className="btn btn-primary btn-sm" onClick={actions.logout}>Logout</button>
        <p>Counter: {store?.counter}</p>
        <button className="btn btn-primary btn-sm" onClick={() => actions.increment(store?.counter)}>+</button>
        <button className="btn btn-primary btn-sm" onClick={() => actions.decrement(store?.counter)}>-</button>
        </>
    )
}

export default Home
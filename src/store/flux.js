const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            email: 'lrodriguez@4geeks.co',
            password: '123456',
            currentUser: null,
            counter: 0
        },
        actions: {
            login: () => {
                setStore({ currentUser: { 
                    email: 'lrodriguez@4geeks.co',
                    name: 'Luis J. Rodriguez O.'
                }})
            },
            logout: () => {
                setStore({ currentUser: null })
            },
            increment: (counter) => {
                setStore({ counter: counter + 1 })
            }, 
            decrement: (counter) => {
                setStore({ counter: counter - 1 })
            }, 
            saludar: () => {
                const store = getStore()
                console.log(`Hola, ${store?.currentUser?.name}`)
            },
            ejecutarAction: () => {
                const actions = getActions()
                actions.saludar()
            }
        }
    }
}

export default getState
import React, { createContext, useState } from 'react'
import getState from './flux'

export const Context = createContext()

const injectContext = PassedComponent => {
    const StoreWrapper = () => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }))

        return (
            <Context.Provider value={state}>
                <PassedComponent />
            </Context.Provider>
        )
    }

    return StoreWrapper

}


export default injectContext
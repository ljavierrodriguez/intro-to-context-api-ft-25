import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import GlobalContextProvider from './context/GlobalContextProvider'
import Menu from './components/Menu'
import UserContextProvider from './context/UserContextProvider'
import injectContext from './store/AppContext'

const App = () => {
    return (
        <GlobalContextProvider>
            <UserContextProvider>
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </GlobalContextProvider>
    )
}

export default injectContext(App)
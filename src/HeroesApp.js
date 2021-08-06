import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
import { AppRouter } from './routes/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('hero-app-user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(AuthReducer, {}, init)

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

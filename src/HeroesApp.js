import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
import { AppRouter } from './routes/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user_login, dispatch] = useReducer(AuthReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user_login))
    }, [user_login])

    return (
        <AuthContext.Provider value={{ user_login, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

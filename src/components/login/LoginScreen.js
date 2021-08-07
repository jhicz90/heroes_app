import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        // history.push('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'José Hans'
            }
        })
        history.replace('/')
    }

    return (
        <div className="container">
            <h2>Login</h2>
            <hr />
            <button
                onClick={handleLogin}
                className="btn btn-success"
            >Ingresar</button>
        </div>
    )
}

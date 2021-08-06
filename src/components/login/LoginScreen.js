import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/')
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

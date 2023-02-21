import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({ element: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem('token') ?
                    <Component {...props} /> :
                    <Navigate to='/login' />
            }}
        />
    )
}

export default PrivateRoute;
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function PrivateRoute({ component: Compnent, ...rest }) {
    const { currentUser } = useAuth()
    
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Compnent {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}

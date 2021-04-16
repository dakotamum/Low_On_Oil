import React from 'react'
import Signup from './Signup.js'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContext"
import './login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Signup />
                    </div>
                </Container>
            </AuthProvider>
        )}
}

export default Login
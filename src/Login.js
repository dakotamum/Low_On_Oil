import React from 'react'
import Signup from './Signup.js'
import { Container } from 'react-bootstrap'
import './login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
			<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
				<div className="w-100" style={{ maxWidth: "400px" }}>
					<Signup />
				</div>
			</Container>
        )}
}

export default Login
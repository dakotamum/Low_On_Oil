import React from 'react';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Dashboard from './components/Dashboard'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
import Schedule from './components/Schedule'
import Reviews from './components/Reviews'
import NavBar from './components/NavBar'
import Admin from './components/Admin'
import Home from './components/Home'
import './styles/app.css';

class App extends React.Component{
	render(){
		return(
			<>
				<Router>
					<NavBar/>
					<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
						<div className="w-100" style={{ maxWidth: "400px"}}>
							<AuthProvider>
								<Switch>
									<Route path="/" exact component={Home}/>
									<PrivateRoute exact path ="/dashboard" component={Dashboard} />
									<PrivateRoute exact path ="/update-profile" component={UpdateProfile} />
									<Route path="/signup" component={Signup} />
									<Route path="/login" component={Login} />
									<Route path="/forgot-password" component={ForgotPassword} />
									<Route path="/schedule" component={Schedule} />
									<Route path="/reviews" component={Reviews} />
									<Route path="/admin" component={Admin} />
								</Switch>
							</AuthProvider>
						</div>
					</Container>
				</Router>
			</>
		)
	}
}

export default App;
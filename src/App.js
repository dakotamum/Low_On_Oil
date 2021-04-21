import React from 'react';
import Login from './Login.js'
import Signup from './Signup.js'
import Dashboard from './Dashboard'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Schedule from './Schedule'
import Reviews from './Reviews'
import Navbar from './NavBar'
import './app.css';
import NavBar from './NavBar';

class App extends React.Component{
	render(){
		return(
		<Container className="d-flex" style={{ minHeight: "100vh"}}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<NavBar/>
					<AuthProvider>
						<Switch>
							<Route path="/" exact />
							<PrivateRoute exact path ="/dashboard" component={Dashboard} />
							<PrivateRoute exact path ="/update-profile" component={UpdateProfile} />
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
							<Route path="/forgot-password" component={ForgotPassword} />
							<Route path="/schedule" component={Schedule} />
							<Route path="/reviews" component={Reviews} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
		)
	}
}

export default App;
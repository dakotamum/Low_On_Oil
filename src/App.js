import React from 'react';
import NavBar from './NavBar.js';
import Home from './Home.js'
import Schedule from './Schedule.js'
import Ratings from './Ratings.js'
import Login from './Login.js'
import { base } from './firebase/firebaseConfig.js'
import './app.css';

class App extends React.Component{
	constructor(props){
		super(props)
		this.toggleHome = this.toggleHome.bind(this)
		this.toggleSchedule = this.toggleSchedule.bind(this)
		this.toggleRatings = this.toggleRatings.bind(this)
		this.toggleLogin = this.toggleLogin.bind(this)
		this.state={
			key: this.props.id,
			toggleHome: true,
			toggleSchedule: false,
			toggleRatings: false,
			toggleLogin: false
		}
	}

	toggleHome(){
		this.setState({toggleHome: true})
		this.setState({toggleSchedule: false})
		this.setState({toggleRatings: false})
		this.setState({toggleLogin: false})
	}

	toggleSchedule(){
		this.setState({toggleSchedule: true})
		this.setState({toggleHome: false})
		this.setState({toggleRatings: false})
		this.setState({toggleLogin: false})
	}

	toggleRatings(){
		this.setState({toggleRatings: true})
		this.setState({toggleHome: false})
		this.setState({toggleSchedule: false})
		this.setState({toggleLogin: false})
	}

	toggleLogin(){
		this.setState({toggleHome: false})
		this.setState({toggleSchedule: false})
		this.setState({toggleRatings: false})
		this.setState({toggleLogin: true})
	}

	render(){
		return(
			<div className="app">
				<NavBar toggleHome = {this.toggleHome} toggleSchedule = {this.toggleSchedule} toggleRatings = {this.toggleRatings} toggleLogin = {this.toggleLogin}
				togSched={this.state.toggleSchedule} togRate={this.state.toggleRatings} togHome={this.state.toggleHome} togLog={this.state.toggleLogin}/>
				{this.state.toggleHome ? (<div><Home /></div>) : this.state.toggleSchedule ? (<div><Schedule /></div>) : this.state.toggleRatings ? (<div><Ratings /></div>) : this.state.toggleLogin ? (<div><Login /></div>) : null}
			</div>
		)
	}
}

export default App;
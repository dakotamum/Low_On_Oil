import React from 'react';
import NavBar from './NavBar.js';
import Home from './Home.js'
import Schedule from './Schedule.js'
import Ratings from './Ratings.js'
import './app.css';

class App extends React.Component{
	constructor(props){
		super(props)
		this.toggleHome = this.toggleHome.bind(this)
		this.toggleSchedule = this.toggleSchedule.bind(this)
		this.toggleRatings = this.toggleRatings.bind(this)
		this.state={
			key: this.props.id,
			toggleHome: true,
			toggleSchedule: false,
			toggleRatings: false
		}
	}

toggleHome(){
	this.setState({toggleHome: true})
	this.setState({toggleSchedule: false})
	this.setState({toggleRatings: false})
}
toggleSchedule(){
	this.setState({toggleSchedule: true})
	this.setState({toggleHome: false})
	this.setState({toggleRatings: false})
}
toggleRatings(){
	this.setState({toggleRatings: true})
	this.setState({toggleHome: false})
	this.setState({toggleSchedule: false})
}

	render(){
		return(
			<div className="app">
				<NavBar toggleHome = {this.toggleHome} toggleSchedule = {this.toggleSchedule} toggleRatings = {this.toggleRatings}
				togSched={this.state.toggleSchedule} togRate={this.state.toggleRatings} togHome={this.state.toggleHome} />
				{this.state.toggleHome ? (<div><Home /></div>) : this.state.toggleSchedule ? (<div><Schedule /></div>) : this.state.toggleRatings ? (<div><Ratings /></div>) : null}
			</div>
		)
	}
}

export default App;
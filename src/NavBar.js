import React from 'react'
import './navbar.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            key: this.props.id + 1
        }
    }

    render(){
        return(
            <div className="navbar">
                <div className="logo">
                    Low on Oil
                </div>
                <div className="tabs">
                    <div className="single_tab" onClick={this.props.toggleHome} style={this.props.togHome ? {backgroundColor: 'white', color: 'black'} : null}>
                        Home
                    </div>
                    <div className="single_tab" onClick={this.props.toggleSchedule} style={this.props.togSched ? {backgroundColor: 'white', color: 'black'} : null}>
                        Schedule
                    </div>
                    <div className="single_tab" onClick={this.props.toggleRatings} style={this.props.togRate ? {backgroundColor: 'white', color: 'black'} : null}>
                        Ratings
                    </div>
                </div>
            </div>
        )}
}

export default Header

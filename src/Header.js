import React from 'react'
import './header.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            key: this.props.id + 1
        }
    }

    render(){
        return(
            <div className="header">
                <h1>Low on Oil</h1>
                <div className="tabs">
                    <div className="single_tab" onClick={this.props.toggleHome}>
                        Home
                    </div>
                    <div className="single_tab" onClick={this.props.toggleSchedule}>
                        Schedule
                    </div>
                    <div className="single_tab" onClick={this.props.toggleRatings}>
                        Ratings
                    </div>
                </div>
            </div>
        )}
}

export default Header

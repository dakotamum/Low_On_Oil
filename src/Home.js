import React from 'react'
import './home.css'
import logo from './logo.png'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div className="home">
                <h1>Home Page</h1>
                <img src= {logo} alt="low on oil" />
            </div>
        )}
}

export default Home

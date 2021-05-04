import React from 'react'
import { ToastBody } from 'react-bootstrap'
import './calendar.css'

class Calendar extends React.Component{
    constructor(props){
        var today = new Date();
        var monthNumber = today.getMonth();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"];
        var currentMonthName = monthNames[monthNumber];
        
        super(props)
        this.state={
            currentMonth: currentMonthName
        }
    }

    render(){
        return(
            <div className="calendar-wrapper">
                <div className="month">{this.state.currentMonth}</div>
                <div className="calendar">
                    <div className="weekday">S</div>
                    <div className="weekday">M</div>
                    <div className="weekday">T</div>
                    <div className="weekday">W</div>
                    <div className="weekday">T</div>
                    <div className="weekday">F</div>
                    <div className="weekday">S</div>
                    <div className="day">1</div>
                    <div className="day">2</div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                    <div className="day">6</div>
                    <div className="day">7</div>
                    <div className="day">8</div>
                    <div className="day">9</div>
                    <div className="day">10</div>
                    <div className="day">11</div>
                    <div className="day">12</div>
                    <div className="day">13</div>
                    <div className="day">14</div>
                    <div className="day">15</div>
                    <div className="day">16</div>
                    <div className="day">17</div>
                    <div className="day">18</div>
                    <div className="day">19</div>
                    <div className="day">20</div>
                    <div className="day">21</div>
                    <div className="day">22</div>
                    <div className="day">23</div>
                    <div className="day">24</div>
                    <div className="day">25</div>
                    <div className="day">26</div>
                    <div className="day">27</div>
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>
                    <div className="day">31</div>
                </div>
            </div>
        )}
}

export default Calendar
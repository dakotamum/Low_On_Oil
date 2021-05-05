import React from 'react'
import { ToastBody } from 'react-bootstrap'
import './calendar.css'

class Calendar extends React.Component{
    constructor(props){
        var today = new Date();
        var monthNumber = today.getMonth();
        var year = today.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"];
        var currentMonthName = monthNames[monthNumber];

        var firstDay = new Date(year, monthNumber, 1).getDay()
        var daysInMonth = new Date(year, monthNumber + 1, 0).getDate()

        super(props)
        this.state={
            currentMonth: monthNames[monthNumber],
            currentYear: year,
            firstWeekDay: firstDay,
            numberOfDays: daysInMonth
        }
        this.getBlanks = this.getBlanks.bind(this)
        this.getDays = this.getDays.bind(this)
    }

    getBlanks(){
        var blanks = [];
        for (var i = 0; i < this.state.firstWeekDay; i++) {
            blanks.push(<div className='blanks' key = {0-i}></div>);
        }
        return blanks;
    }

    getDays(){
        var days = [];
        for (var i = 0; i < this.state.numberOfDays; i++) {
            days.push(<div className='day' key = {i}>{i + 1}</div>);
        }
        return days;
    }

    render(){
        return(
            <div className="calendar-wrapper">
                <div className="month">{this.state.currentMonth} {this.state.currentYear}</div>
                <div className="calendar">
                    <div className="weekday">S</div>
                    <div className="weekday">M</div>
                    <div className="weekday">T</div>
                    <div className="weekday">W</div>
                    <div className="weekday">T</div>
                    <div className="weekday">F</div>
                    <div className="weekday">S</div>
                    {this.getBlanks()}
                    {this.getDays()}
                </div>
            </div>
        )}
}

export default Calendar
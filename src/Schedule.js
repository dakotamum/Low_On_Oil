import React from 'react'
import './schedule.css';
import asians from './asian_children.PNG'
import Calendar from './Calendar'

export default function Schedule() {
    return (
        <div>
            <Calendar />
            <h2>Schedule Your Oil Change Here!</h2>
            <img src={asians}/>
        </div>
    )
}

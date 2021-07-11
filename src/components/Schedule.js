import React from 'react'
import '../styles/schedule.css';
import asians from '../media/asian_children.PNG'
import ScheduleForm from './ScheduleForm'

export default function Schedule() {
    return (
        <div>
            <img src={asians} alt="asian children"/>
            <ScheduleForm />
        </div>
    )
}
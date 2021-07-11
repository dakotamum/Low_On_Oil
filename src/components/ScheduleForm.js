import React from 'react'
import '../styles/scheduleform.css'
import firebase from '../firebase/firebaseConfig'
class ScheduleForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            timeinput: '',
            timeslots: []
        }
        this.updateDateInput = this.updateDateInput.bind(this) 
        this.selectTime = this.selectTime.bind(this) 
    }

    updateDateInput(e){

        this.setState({timeslots: []})

        var givendate = new Date(e.target.value)
        var dateString = ('0' + (givendate.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + givendate.getUTCDate()).slice(-2) + '-' + givendate.getUTCFullYear()

        const appointmentsRef = firebase.database().ref("/Appointments/" + dateString)
        this.setState({timeinput: e.target.value}) 
        console.log(this.state.timeinput)
        appointmentsRef.on('value', (snapshot)=>{
            const appointments = snapshot.val()
            const appointmentsList = []
            for (let id in appointments){
                if(appointments[id] === true){
                    appointmentsList.push(id)
                }
            }
            this.setState({timeslots: appointmentsList})
        })

    }

    selectTime(e){
        alert(e.target.id)
    }

    render(){
        return(
            <div className="schedule-form-page">
                <div className="schedule-form">
                    <div className="header">Set up an appointment!</div>
                    <div className="customer-select-appointments">
                        <input type="date" onChange={this.updateDateInput}></input>
                    </div>
                    <div>

                {this.state.timeslots ? this.state.timeslots.map((slot)=>(
                    <div id={slot} onClick={this.selectTime}>
                        {slot}
                    </div>
                    //<Rating username = {review.username} stars = {review.stars} ratingtext = {review.reviewtext}/>
                )) : ''}
                    </div>
                    <div className="button-wrapper">
                        <div className="button" onClick={this.submitTimeSlot}>Submit</div>
                        <div className="button" onClick={this.props.toggleScheduleDialog}>Close</div>
                    </div>
                </div>
            </div>
        )}
}

export default ScheduleForm
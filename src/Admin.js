import React, {useState} from 'react'
import {useEffect} from 'react'
import './admin.css';
import firebase from './firebase/firebaseConfig'


export default function Admin() {

    var [adminsList, setAdminsList] = useState()
    var [username, setUsername] = useState('');

    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value);
    };

    useEffect(() => {
        // const reviewsRef = firebase.database().ref("Admins")
        // reviewsRef.on('value', (snapshot)=>{
        //     const admins = snapshot.val()
        //     const adminsList = []
        //     for (let id in admins){
        //         adminsList.push(admins[id])
        //     }
        //     setAdminsList(adminsList)
        //     console.log("weiner")
        // });
    }, []);

    const createAdmin = () => {
        const adminRef = firebase.database().ref("Admins")
        const admin = {"username": username}
        adminRef.push(admin)

        setUsername("")
    };

    return (
        <div>
            <ul>
                <li>This admin page *should* only appear if the user is an admin</li>
                <li>If the 'admin' boolean is set to true in NavBar.js, the tab will appear in the NavBar</li>
                <li>If the user is not an admin and still hits '/admin,' we should redirect them back to '/home'</li>
                <ul>
                    <li>View Reviews</li>
                    <li>View Calendar</li>
                    <li>View User's Information</li>
                </ul>
            </ul>
            <br></br>
            <input type="text" onChange={handleUsernameOnChange} value={username}></input>
            <br></br>
            <button onClick={createAdmin}>Submit</button>
        </div>
    )
}

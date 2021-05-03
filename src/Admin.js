import React from 'react'
import './admin.css';


export default function Admin() {
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
        </div>
    )
}

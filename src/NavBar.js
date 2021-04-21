import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './navbar.css'

export default function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Low On Oil  <i className="fas fa-oil-can" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schedule" className="nav-links" onClick={closeMobileMenu}>
                                Schedule
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reviews" className="nav-links" onClick={closeMobileMenu}>
                                Reviews
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

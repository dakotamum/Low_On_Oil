import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Low On Oil <i className="fab fa-typo3" />
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
                </div>
            </nav>
        </>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from '../Styles/Navbar.module.css'
import '../Styles/Navbar.css'
const Navbar = () => {
    return (
        <nav className={Style.nav}>
            <ul>
                <li className={Style['nav-first']}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bulletins">Bulletins</NavLink>
                        </li>
                        <li>
                            <NavLink to="/insurance">Insurance</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

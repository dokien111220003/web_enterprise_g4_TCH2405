import React from 'react';
import { NavLink } from 'react-router-dom';
import './MMMNavBar.css';
import logo from '../Assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="line-container">
                <div className="line"></div>
                <div className="second-line"></div>
            </div>
            <div className="container">   
                <h3><NavLink exact to="/student_page" className="logo" alt="logo"><img src={logo}></img></NavLink></h3>
                <ul className="nav-links">
                    <li><NavLink exact to='/marketing_manager' activeClassName="active">Dashboard</NavLink></li>
                    <li><NavLink exact to='/marketing_manager/contribution' activeClassName="active">Contribution</NavLink></li>
                    <li><NavLink exact to='/login' activeClassName="active">Logout</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

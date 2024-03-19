import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../Assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="line-container">
                <div className="line"></div>
                <div className="second-line"></div>
            </div>
            <div className="container">   
                <h3><NavLink exact to="/student_page" className="logo"><img src={logo}></img></NavLink></h3>
                <ul className="nav-links">
                    <li><NavLink exact to='/facultyadmin' activeClassName="active">Faculty</NavLink></li>
                    <li><NavLink exact to='/accadmin' activeClassName="active">Account</NavLink></li>
                    <li><NavLink exact to='/topicadmin' activeClassName="active">Blog</NavLink></li>
                    <li><NavLink exact to='/login' activeClassName="active">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

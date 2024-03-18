import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3><NavLink exact to="/" className="logo">Logo</NavLink></h3>
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

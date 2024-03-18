import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarStudent.css';
import search_icon from '../Assets/search.png';
import logo from '../Assets/logo.png';
import profileIcon from '../Assets/user.png';

const NavBarStudent = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <h3><NavLink exact to="/" className="logo"><img src={logo} alt="Logo"/></NavLink></h3>
                    <div className='search-container'>
                        <div className="search-input">
                            <img src={search_icon} alt="Search Icon" className="icon-search" />
                            <input type="search" placeholder="Search"/>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><NavLink exact to="/personal"><img src={profileIcon} alt="Profile" className="icon-profile"/></NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className="sidebar">
                <NavLink to="/blog" className="sidebar-item">Blog</NavLink>
                <NavLink to="/faculty" className="sidebar-item">Faculty</NavLink>
            </div>
        </div>
    )
}

export default NavBarStudent;

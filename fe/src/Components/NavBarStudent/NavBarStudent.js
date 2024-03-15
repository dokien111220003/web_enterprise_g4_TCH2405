import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarStudent.css';
import search_icon from '../Assets/search.png';

const NavBarStudent = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h3><NavLink exact to="/" className="logo">Logo</NavLink></h3>
                <div className='search-container'>
                    <div className="search-input">
                        <img src={search_icon} alt="" className="icon-search" />
                        <input type="search" placeholder="Search"/>
                    </div>
                </div>
                <ul className="nav-links">
                    <li><NavLink exact to='#' activeClassName="active">Blog</NavLink></li>
                    <li><NavLink exact to='#' activeClassName="active">Falcuty</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarStudent;

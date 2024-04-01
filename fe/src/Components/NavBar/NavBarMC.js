import React from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from '../Assets/search.png';
import logo from '../Assets/logo.png';
import profileIcon from '../Assets/user.png';
import Footer from '../Footer/StudentFooter';
import SideBarStudent from '../SideBar/SideBarStudent';
import arrowdown from '../Assets/arrow.png';
import './NavBarMC.css';
const NavBarMC = ({ children }) => {
    return (
        <>
            <nav className="navbar-student">
                <div className="header-student">
                    <h3><NavLink exact to="/student_page" className="logo"><img src={logo} alt="Logo" /></NavLink></h3>
                </div>
                <div className="line-nav-student">
                </div>
                <div className="nav-content-student">
                    <ul className="nav-student-links">
                        <li><NavLink exact to='/' activeClassName="active">News</NavLink></li>
                        <li><NavLink exact to='/' activeClassName="active">About us</NavLink></li>
                        <li><NavLink exact to='/' activeClassName="active">Faculty</NavLink>
                            <img src={arrowdown} alt="" className="student-nav-arrow"></img>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink exact to='/' activeClassName="active" className="dropbtn">Contribution</NavLink>
                            <div className="dropdown-content">
                                <NavLink to='/mc_page'>First Hand</NavLink>
                                <NavLink to='/mc_page2'>Final Hand</NavLink>
                            </div>
                        </li>
                        <li><NavLink exact to='/' activeClassName="active">Account</NavLink></li>
                        <div className='search-container-student'>
                            <div className="search-input-student">
                                <img src={search_icon} alt="" className="icon-search-student" />
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
            <div className="main-container">
                <div className="content-student">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NavBarMC;

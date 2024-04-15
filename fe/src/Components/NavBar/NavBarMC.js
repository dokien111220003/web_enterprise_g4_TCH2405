import React from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from '../Assets/search.png';
import logo from '../Assets/logo.png';
import FooterMC from '../Footer/MCFooter';
import './NavBarMC.css';
import logouticon from '../Assets/signout.png';
const NavBarMC = ({ children }) => {
    return (
        <>
            <nav className="navbar-student">
                <div className="header-student">
                    <h3><NavLink exact to="/mc_page" className="logo"><img src={logo} alt="Logo" /></NavLink></h3>
                </div>
                <div className="line-nav-student">
                </div>
                <div className="nav-content-student">
                    <ul className="nav-student-links">
                        <li><NavLink exact to='/mc_page' activeClassName="active">News</NavLink></li>
                        <li><NavLink exact to='/aboutMC' activeClassName="active">About us</NavLink></li>
                        <li><NavLink exact to='/termMC' activeClassName="active">Term</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink exact to='' activeClassName="active" className="dropbtn">Contribution</NavLink>
                            <div className="dropdown-content">
                                <NavLink to='/mc_page1'>First Hand</NavLink>
                                <NavLink to='/mc_page2'>Final Hand</NavLink>
                            </div>
                        </li>
                        <li><NavLink exact to='/personal' activeClassName="active">Account</NavLink></li>
                        <div className='search-container-student'>
                            <div className="search-input-student">
                                <img src={search_icon} alt="" className="icon-search-student" />
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                        <li><NavLink exact to='/' activeClassName="active" className="link-hover">Logout</NavLink>
                            <img src={logouticon} alt="" className="admin-nav"></img>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-container">
                <div className="content-student">
                    {children}
                </div>
            </div>
            <FooterMC/>
        </>
    );
}

export default NavBarMC;

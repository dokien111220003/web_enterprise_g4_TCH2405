import React from 'react';
import { NavLink } from 'react-router-dom';
import search_icon from '../Assets/search.png';
import logo from '../Assets/logo.png';
import Footer from '../Footer/StudentFooter';
import SideBarStudent from '../SideBar/SideBarAD';
import logouticon from '../Assets/signout.png';
const NavBarGuest = ({ children }) => {
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
                        <li><NavLink exact to='/marketing_manager_main' activeClassName="active">News</NavLink></li>
                        <li><NavLink exact to='/about' activeClassName="active">About us</NavLink></li>
                        <li><NavLink exact to='/term' activeClassName="active">Term</NavLink></li>
                        <div className='search-container-student'>
                            <div className="search-input-student">
                                <img src={search_icon} alt="" className="icon-search-student" />
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                        <li><NavLink exact to='/login' activeClassName="active" className="link-hover">Login</NavLink>
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
            <Footer />
        </>
    );
}

export default NavBarGuest;

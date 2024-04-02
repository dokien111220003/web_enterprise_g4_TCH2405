import React, { useState } from 'react';
import './SideBarAdmin.css';
import user_img from '../Assets/user-img.jpg';
import dashboardicon from '../Assets/home.png';
import usericon from '../Assets/user-icon.png';
import facultyicon from '../Assets/faculty.png';
import arrowdown from '../Assets/arrow.png';
import logouticon from '../Assets/signout.png';

const SideBarAdmin = () => {

    const [isFacultyOpen, setIsFacultyOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [facultyArrowRotation, setFacultyArrowRotation] = useState(0);
    const [accountArrowRotation, setAccountArrowRotation] = useState(0);

    const toggleFacultyMenu = () => {
        setIsFacultyOpen(!isFacultyOpen);
        setFacultyArrowRotation(isFacultyOpen ? 0 : 180);
    }

    const toggleAccountMenu = () => {
        setIsAccountOpen(!isAccountOpen);
        setAccountArrowRotation(isAccountOpen ? 0 : 180);
    }

    return (
        <div>
            <div className="sidebar-admin-container">
                <div className="admin-sidebar">
                    <div className="sidebar-head">
                        <div className="admin-img">
                            <img src={user_img} alt="" className="user_img"></img>
                        </div>
                        <div className="admin-details">
                            <p className="admin-title">The Unforgotten</p>
                            <p className="admin-name">Mr. Yone</p>
                        </div>
                    </div>
                    <div className="admin-nav">
                        <div className="admin-menu">
                            <p className="title">Main</p>
                            <ul>
                                <li>
                                    <a href="/adminpage1">
                                        <img src={dashboardicon} alt="" className="admin-nav-icon"></img>
                                        <span className="admin-nav-text">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facultyicon} alt="" className="admin-nav-icon"></img>
                                        <span className="admin-nav-text">Faculty</span>
                                        <img src={arrowdown} alt="" className="admin-nav-arrow" onClick={toggleFacultyMenu} style={{ transform: `rotate(${facultyArrowRotation}deg)` }}></img>
                                    </a>

                                    <ul className="admin-sub-menu" style={{ display: isFacultyOpen ? 'block' : 'none' }}>
                                        <li>
                                            <a href="/facultyadmin">
                                                <span className="admin-nav-text">View All</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/add_faculty">
                                                <span className="admin-nav-text">Add New</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={usericon} alt="" className="admin-nav-icon"></img>
                                        <span className="admin-nav-text">Account</span>
                                        <img src={arrowdown} alt="" className="admin-nav-arrow" onClick={toggleAccountMenu} style={{ transform: `rotate(${accountArrowRotation}deg)` }}></img>
                                    </a>

                                    <ul className="admin-sub-menu" style={{ display: isAccountOpen ? 'block' : 'none' }}>
                                        <li>
                                            <a href="/accadmin">
                                                <span className="admin-nav-text">Student</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/accadmin">
                                                <span className="admin-nav-text">Guest</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/accadmin">
                                                <span className="admin-nav-text">Marketing Coordinator</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/accadmin">
                                                <span className="admin-nav-text">Marketing Manager</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="admin-navbar-footer">
                        <div className="admin-setting">
                            <p className="admin-setting-title">Others</p>
                            <ul>
                                <li className="admin-logout">
                                    <a className="logout-icon" href="/login">
                                        <img src={logouticon} alt="" className="admin-nav-icon"></img>
                                        <span className="admin-nav-footer-text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarAdmin;

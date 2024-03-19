// SidebarStudent.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarStudent.css';

const SideBarStudent = () => {
    return (
        <div className="sidebar-student">
            <ul className="sidebar-student-menu">
                <li><NavLink exact to="/student_page">Blog</NavLink></li>
                <li><NavLink exact to="/student_page">Faculty</NavLink></li>
                {/* Add more sidebar items here */}
            </ul>
        </div>
    );
}

export default SideBarStudent;

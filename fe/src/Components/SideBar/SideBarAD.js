// SidebarStudent.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarAD.css';

const SideBarAD = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Account</h2>
            </div>
            <ul className="sidebar-menu">
                <li><a href="/accadmin">- Marketing Manager</a></li>
                <li><a href="/accadmin">- Marketing Coordinator</a></li>
                <li><a href="/accadmin">- Student</a></li>
                <li><a href="/accadmin">- Guest</a></li>
            </ul>
        </div>
    );
}

export default SideBarAD;

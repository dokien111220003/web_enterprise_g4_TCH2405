import React from 'react';
import './SideBarStudent.css';

const SidebarStudent = () => {
    return (
        <div className="sidebar-student">
            <div className='sidebar-student-header'>
                <h2>Related</h2>
            </div>
            <ul className="sidebar-student-menu">
                <li><a href="/student_page">- Blog</a></li>
                <li><a href="/student_page">- Faculty</a></li>
            </ul>
        </div>
    );
}

export default SidebarStudent;

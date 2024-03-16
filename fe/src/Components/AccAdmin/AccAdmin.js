import React from 'react';
import './AccAdmin.css';

const AccAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Account</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/accadmin">Marketing Manager</a></li>
        <li><a href="/accadmin">Marketing Coordinator</a></li>
        <li><a href="/accadmin">Student</a></li>
        <li><a href="/accadmin">Guest</a></li>
      </ul>
    </div>
  );
}

export default AccAdmin;

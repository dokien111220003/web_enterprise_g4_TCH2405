import React from 'react';
import './AccAdmin.css';

const AccAdmin = () => {
  return (
    <div className="acc-admin">
      <div className="sidebar">
        <a href="#guest">Guest</a>
        <a href="#student">Student</a>
        <a href="#marketing-coordinator">Marketing Coordinator</a>
        <a href="#marketing-manager">Marketing Manager</a>
        <a href="#add" className="add-button">Add</a> 
      </div>
    </div>
  );
}

export default AccAdmin;

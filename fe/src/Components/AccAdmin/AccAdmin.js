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
      </div>
      
      {/* Phần nội dung chính của trang sẽ ở đây */}
      <div style={{marginLeft: "250px", padding: "20px"}}>
        {/* Ví dụ về nội dung */}
        <h2>Welcome to Account Administration</h2>
        <p>Chọn một tài khoản từ sidebar để quản lý.</p>
      </div>
    </div>
  );
}

export default AccAdmin;

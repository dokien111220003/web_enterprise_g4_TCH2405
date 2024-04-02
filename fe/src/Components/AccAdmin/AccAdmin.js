import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccAdmin.css';
import search_icon from '../Assets/search.png';

const AccAdmin = () => {
  let navigate = useNavigate();
  const goToAddPage = () => {
    navigate("/add_user");
  };
  const [users, setUsers] = useState([
    { id: 1, name: 'Jack' , email: 'abcd@gmail.com', password: '1234', phone: '0123456789', address: 'VN', role: 'Guest', course: ''},
    { id: 2, name: 'Kim', email: 'abcd@gmail.com', password: '1234', phone: '0123456789', address: 'VN', role: 'MM', course: ''},
    { id: 3, name: 'Lake', email: 'abcd@gmail.com', password: '1234', phone: '0123456789', address: 'VN', role: 'MC', course: 'Computer Science'},
    { id: 4, name: 'Kurt', email: 'abcd@gmail.com', password: '1234', phone: '0123456789', address: 'VN', role: 'Student', course: 'Mathematics'},
  ]);
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const editUser = (id) => {
    navigate(`/edit_user/${id}`);
  };
  return (
    <div className="account-admin">
        <div className="page-content-header">
          <h1>Account Management Page</h1>
        </div>
        
        <div className='search-container-admin'>
          <div className="search-input">
            <img src={search_icon} alt="" className="icon-search" />
            <input type="search" placeholder="Search"/>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th className='stt'>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Role</th>
              <th>Course</th>
              <th className="action-column">
                <div className="add-button-container">
                  <button onClick={goToAddPage} className="add-button">Add User</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className='stt_td'>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>{user.course}</td>
                <td className='action-user'>
                  <button onClick={() => editUser(user.id)} className="edit-button">Edit</button>
                  <button onClick={() => deleteUser(user.id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default AccAdmin;

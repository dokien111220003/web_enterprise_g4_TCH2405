import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyAdmin.css';
import search_icon from '../Assets/search.png';

const FacultyAdmin = () => {
  let navigate = useNavigate();
  const goToAddPage = () => {
    navigate("/add_faculty");
  };
  const [faculties, setFaculties] = useState([
    { id: 1, name: 'Computer Science' ,des: 'Computer science is the study of computers and computational systems.'},
    { id: 2, name: 'Mathematics', des: 'Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.'},
  ]);
  const deleteFaculty = (id) => {
    setFaculties(faculties.filter(faculty => faculty.id !== id));
  };
  const editFaculty = (id) => {
    navigate(`/edit_faculty/${id}`);
  };

  return (
    <div className="faculty-admin">
      <div className="page-content-header">
        <h1>Faculty Management Page</h1>
      </div>
      
      <div className='search-container'>
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
            <th>Description</th>
            <th className="action-column">
              <div className="add-button-container">
                <button onClick={goToAddPage} className="add-button">Add Faculty</button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={faculty.id}>
              <td className='stt_td'>{index + 1}</td>
              <td>{faculty.name}</td>
              <td className="description-column">{faculty.des}</td>
              <td className='action-faculty'>
                <button onClick={() => editFaculty(faculty.id)}>Edit</button>
                <button onClick={() => deleteFaculty(faculty.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyAdmin;

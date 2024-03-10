import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyAdmin.css';

const FacultyAdmin = () => {
  let navigate = useNavigate();
  const goToAddPage = () => {
    navigate("/add_faculty");
  };
  const [faculties, setFaculties] = useState([
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Mathematics' },
  ]);
  const deleteFaculty = (id) => {
    setFaculties(faculties.filter(faculty => faculty.id !== id));
  };
  const editFaculty = (id) => {
    const newName = prompt("Enter new faculty name:");
    if (newName) {
      setFaculties(faculties.map(faculty => {
        if (faculty.id === id) {
          return { ...faculty, name: newName };
        }
        return faculty;
      }));
    }
  };

  return (
    <div className="faculty-admin">
      <div className="page-content-header">
        <h1>Faculty Management Page</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th className='stt'>STT</th>
            <th>Name</th>
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
              <td className='act'>
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

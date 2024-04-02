import React, { useState } from 'react';
import './Course.css';
import { useNavigate } from 'react-router-dom';
import search_icon from '../Assets/search.png';

const Course = () => {

    let navigate = useNavigate();
    const goToAddPage = () => {
        navigate("/add_course");
    };
    const [faculties, setFaculties] = useState([
        { id: 1, faculty: 'Business', year: '2019-2024', timestart: '1-1-2023', timeend: '12-12-2023', finaltime: '5-1-2024', status: 'Closed' },
        { id: 1, faculty: 'Business', year: '2019-2024', timestart: '1-1-2023', timeend: '12-12-2023', finaltime: '5-1-2024', status: 'Closed' },
    ]);
    const deleteFaculty = (id) => {
        setFaculties(faculties.filter(faculty => faculty.id !== id));
    };
    const editFaculty = (id) => {
        navigate(`/edit_course/${id}`);
    };

    return (
        <nav className="course-container">
            <div className="faculty-admin">
                <div className="page-content-header">
                    <h1>Course Management Page</h1>
                </div>

                <div className='search-container'>
                    <div className="search-input">
                        <img src={search_icon} alt="" className="icon-search" />
                        <input type="search" placeholder="Search" />
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th className='stt'>#</th>
                            <th>Academic Year</th>
                            <th>Faculty</th>
                            <th>Start Date</th>
                            <th>Closure Date</th>
                            <th>Final Closure Date</th>
                            <th>Status</th>
                            <th className="action-column">
                                <div className="add-button-container">
                                    <button onClick={goToAddPage} className="add-button">Add Course</button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {faculties.map((faculty, index) => (
                            <tr key={faculty.id}>
                                <td className='stt_td'>{index + 1}</td>
                                <td>{faculty.year}</td>
                                <td>{faculty.faculty}</td>
                                <td className="timestart-column">{faculty.timestart}</td>
                                <td className="timeend-column">{faculty.timeend}</td>
                                <td className="timeend-column">{faculty.finaltime}</td>
                                <td className="status-column">{faculty.status}</td>
                                <td className='action-faculty'>
                                    <button onClick={() => editFaculty(faculty.id)} className="edit-button">Edit</button>
                                    <button onClick={() => deleteFaculty(faculty.id)} className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </nav>
    )
}

export default Course;

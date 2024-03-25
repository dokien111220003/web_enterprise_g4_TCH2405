import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicAdmin.css';
import search_icon from '../Assets/search.png';

const TopicAdmin = () => {
  let navigate = useNavigate();
  const goToAddPage = () => {
    navigate("/add_topic");
  };
  const [topics, setTopics] = useState([
    { id: 1, name: 'Database Management' , faculty: 'Computer Science', timestart: '1-1-2023', timeend: '12-12-2023', status: 'Closed'},
    { id: 2, name: 'Number Theory', faculty: 'Mathematics', timestart: '1-1-2023', timeend: '12-12-2023', status: 'Open'}
  ]);
  const deleteTopic = (id) => {
    setTopics(topics.filter(topic => topic.id !== id));
  };
  const editTopic = (id) => {
    navigate(`/edit_topic/${id}`);
  };

  return (
    <div className="topic-admin">
      <div className="page-content-header">
        <h1>Topic Management</h1>
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
            <th>Topic's Name</th>
            <th>Faculty</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Status</th>
            <th className="action-column">
              <div className="add-button-container">
                <button onClick={goToAddPage} className="add-button">Add Topic</button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={topic.id}>
              <td className='stt_td'>{index + 1}</td>
              <td>{topic.name}</td>
              <td>{topic.faculty}</td>
              <td>{topic.timestart}</td>
              <td>{topic.timeend}</td>
              <td>{topic.status}</td>
              <td className='act'>
                <button onClick={() => editTopic(topic.id)} className="edit-button">Edit</button>
                <button onClick={() => deleteTopic(topic.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicAdmin;

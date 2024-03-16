import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTopic.css';

const AddNewTopic = () => {
    let navigate = useNavigate();
    const goBack = () => {
        navigate("/TopicAdmin");
    };

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [status, setStatus] = useState('');
    const [faculty, setFaculty] = useState('');

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleFacultyChange = (event) => {
        setFaculty(event.target.value);
    };

    return (
        <div className='add-topic-container'>
            <div className="header">
                <div className="text">Add New Topic</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="input">
                    <select value={faculty} onChange={handleFacultyChange} required>
                        <option value="">Select Faculty</option>
                        <option value="Open">Computer Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="MachineLearning">Machine Learning</option>
                    </select>
                </div>
                <div className="input">
                    <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} required />
                </div>
                <div className="input">
                    <input type="datetime-local" value={endTime} onChange={handleEndTimeChange} required />
                </div>
                <div className="input">
                    <select value={status} onChange={handleStatusChange} required>
                        <option value="">Select Status </option>
                        <option value="Open">Open</option>
                        <option value="Closed">Cancelled</option>
                    </select>
                </div>
            </div>
            <div className="submit-container">
                <button onClick={goBack} className="submit-add">Add</button>
            </div>
            <div className="faculty-link">
                <a href="topicadmin">Back</a>
            </div>
        </div>
    );
}

export default AddNewTopic;

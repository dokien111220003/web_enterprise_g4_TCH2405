import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTopic.css';

const AddNewTopic = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/TopicAdmin");
  };
  return (
<div className='add-container'>
        <div className="header">
            <div className="text">Add New Topic</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="Name" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Faculty" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Time Start" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Time End" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Status" required/>
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

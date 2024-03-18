import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EditTopic.css';

const EditTopicAdmin = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/topicadmin");
  };
  return (
<div className='add-container'>
        <div className="header">
            <div className="text">Edit Topic</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="Topic's Name" required/>
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
            <button onClick={goBack} className="submit-add">Update</button>
        </div>
        <div className="faculty-link">
            <Link to="/topicadmin">Back</Link>
        </div>
    </div>
  );
}

export default EditTopicAdmin;

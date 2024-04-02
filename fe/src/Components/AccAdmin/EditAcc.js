import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EditAcc.css';

const EditUser = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/accadmin");
  };
  return (
<div className='add-faculty-container'>
        <div className="header">
            <div className="text">Edit User</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="Name" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Email" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Password" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Phone" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Address" required/>
            </div>
            <select className="AD-contri-filter-fal">
                    <option value="">Role</option>
                    <option value="Open">Guest</option>
                    <option value="Mathematics">Student</option>
                    <option value="MachineLearning">MC</option>
                    <option value="MachineLearning">MM</option>
            </select>
            <select className="AD-contri-filter-fal">
                    <option value="">Course</option>
                    <option value="None">None</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Machine Learning">Machine Learning</option>
            </select>
        </div>
        <div className="submit-container">
            <button onClick={goBack} className="submit-add">Update</button>
        </div>
        <div className="faculty-link">
            <Link to="/accadmin">Back</Link>
        </div>
    </div>
  );
}

export default EditUser;

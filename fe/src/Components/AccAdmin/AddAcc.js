import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddAcc.css';

const AddNewUser = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/accadmin");
  };
  return (
    <div className='add-faculty-container'>
        <div className="header">
            <div className="text">Add New User</div>
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
            <select className="AD-contri-filter-fal-add">
                    <option value="">Role</option>
                    <option value="Open">Guest</option>
                    <option value="Mathematics">Student</option>
                    <option value="MachineLearning">MC</option>
                    <option value="MachineLearning">MM</option>
            </select>
            <select className="AD-contri-filter-fal-add">
                    <option value="">Faculty</option>
                    <option value="None">None</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Machine Learning">Machine Learning</option>
            </select>
        </div>
        <div className="submit-container">
            <button onClick={goBack} className="submit-add">Add</button>
        </div>
        <div className="faculty-link">
            <a href="accadmin">Back</a>
        </div>
    </div>
  );
}

export default AddNewUser;
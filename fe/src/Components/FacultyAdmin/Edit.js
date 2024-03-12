import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Edit.css';

const EditFalcuty = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/facultyadmin");
  };
  return (
<div className='add-container'>
        <div className="header">
            <div className="text">Edit Falcuty</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="Name" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Description" required/>
            </div>
        </div>
        <div className="submit-container">
            <button onClick={goBack} className="submit-add">Update</button>
        </div>
        <div className="faculty-link">
            <Link to="/facultyadmin">Back</Link>
        </div>
    </div>
  );
}

export default EditFalcuty;

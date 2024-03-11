import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css';

const AddNewFalcuty = () => {
    let navigate = useNavigate();
    const goBack = () => {
    navigate("/facultyadmin");
  };
  return (
<div className='add-container'>
        <div className="header">
            <div className="text">Add New Falcuty</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder="ID Falcuty" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Name" required/>
            </div>
            <div className="input">
                <input type="text" placeholder="Description" required/>
            </div>
        </div>
        <div className="submit-container">
            <button onClick={goBack} className="submit-add">Add</button>
        </div>
        <div className="faculty-link">
            <a href="facultyadmin">Back</a>
        </div>
    </div>
  );
}

export default AddNewFalcuty;

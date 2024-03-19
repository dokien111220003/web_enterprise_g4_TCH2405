import React, { useState } from 'react';
import './ChangePassword.css'; // Đảm bảo đã import CSS mới
import curIcon from '../Assets/current.png';
import lockIcon from '../Assets/new-password.png';
import keyIcon from '../Assets/confirm-password.png';

const ChangePassword = () => {
    const [showPassword] = useState(false);
  
    return (
      <div className='cp-container'>
          <div className="cp-header">
              <div className="cp-text">CHANGE PASSWORD</div>
          </div>
          <div className="cp-inputs">
              <div className="input-field">
                  <img src={curIcon} alt="" className="cp-icon" />
                  <input type={showPassword ? "text" : "password"} placeholder="Current Password"/>
              </div>
              <div className="input-field">
                  <img src={lockIcon} alt="" className="cp-icon" />
                  <input type={showPassword ? "text" : "password"} placeholder="New Password"/>
              </div>
              <div className="input-field">
                  <img src={keyIcon} alt="" className="cp-icon" />
                  <input type={showPassword ? "text" : "password"} placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="cp-submit-container">
              <button className="cp-submit">UPDATE</button>
          </div>
      </div>
    )
  }
  
  export default ChangePassword;
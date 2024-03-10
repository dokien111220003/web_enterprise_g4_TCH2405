import React, { useState } from 'react';
import './Register.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='register-container'>
        <div className="header">
            <div className="text">Register</div>
        </div>
        <div className="inputs">
            <div className="input-field">
                <img src={mail_icon} alt="" className="icon" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input-field">
                <img src={password_icon} alt="" className="icon" />
                <input type={showPassword ? "text" : "password"} placeholder="Password"/>
            </div>
            <div className="input-field">
                <img src={password_icon} alt="" className="icon" />
                <input type={showPassword ? "text" : "password"} placeholder="Re-enter Password"/>
            </div>
        </div>
        <div className="show-password">
            <label><input type="checkbox" onChange={handleShowPasswordToggle}/>
            <span>Show Password</span>
            </label>
        </div>
        <div className="submit-container">
            <button className="submit">Register</button>
        </div>
        <div className="login-link">
            <p>Already have an account? <a href="login">Login here!</a></p>
        </div>
    </div>
  )
}

export default Register;

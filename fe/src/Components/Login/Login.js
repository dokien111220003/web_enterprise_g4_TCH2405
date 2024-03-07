import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-container'>
        <div className="header">
            <div className="text">Sign In</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={mail_icon} alt="" className="icon" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" className="icon" />
                <input type={showPassword ? "text" : "password"} placeholder="Password"/>
            </div>
        </div>
        <div className="show-password">
            <label><input type="checkbox" onChange={handleShowPasswordToggle}/>
            <span>Show Password</span>
            </label>
        </div>
        <div className="submit-container">
            <button className="submit">SIGN IN</button>
        </div>
        <Link to="/" className="main-page">Return to Main Page</Link>
    </div>
  )
}

export default Login;

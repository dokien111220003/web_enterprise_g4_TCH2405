import React, { useState } from 'react';
import { useEffect } from 'react'
import './Register.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';
import InputForm from '../InputForm/InputForm'
import * as UserService from '../../services/UserService';
import { useMutation } from '@tanstack/react-query';
import * as message from '../Message/Message'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const mutation = useMutation({
    mutationFn: data => UserService.signupUser(data)
  })

  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword })
  }

  return (
    <div className="register-page-container">
      <div className='register-container'>
        <div className="header">
          <div className="text">Register</div>
        </div>
        <div className="inputs">
          <div className="input-field">
            <img src={mail_icon} alt="" className="icon" />
            <InputForm style={{ marginBottom: '0px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          </div>
          <div className="input-field">
            <img src={password_icon} alt="" className="icon" />
            <InputForm placeholder="Password" style={{ marginBottom: '0px' }}
              type={showPassword ? "text" : "password"}
              value={password} onChange={handleOnchangePassword} />
          </div>
          <div className="input-field">
            <img src={password_icon} alt="" className="icon" />
            <InputForm placeholder="Comfirm Password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
        </div>
        <div className="show-password">
          <label><input type="checkbox" onChange={handleShowPasswordToggle} />
            <span>Show Password</span>
          </label>
        </div>
        <div className="submit-container">
          <button onClick={handleSignUp} className="submit">REGISTER</button>
        </div>
        <div className="login-link">
          <p>Already have an account? <a href="login">Login here!</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register;

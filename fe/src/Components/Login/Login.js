import React, { useEffect, useState } from 'react';
import './Login.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';
import InputForm from '../InputForm/InputForm'
import { useMutation } from '@tanstack/react-query';
import * as UserService from '../../services/UserService';
import { useLocation, useNavigate } from 'react-router-dom'
import * as message from '../Message/Message'
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: data => UserService.loginUser(data)
  })

  const { data, isLoading, isSuccess } = mutation

  useEffect(() => {
    if(isSuccess) {
        navigate('/')
        console.log('data', data)
    }
  }, [isSuccess])

  console.log('mutation', mutation)

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password
    })
  }

  return (
    <div className='login-container'>
        <div className="header">
            <div className="text-sign-in">Sign In</div>
        </div>
        <div className="inputs">
            <div className="input-field">
                <img src={mail_icon} alt="" className="icon" />
                <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com"
                value={email} onChange={handleOnchangeEmail} />
            </div>
            <div className="input-field">
                <img src={password_icon} alt="" className="icon" />
                <InputForm
                placeholder="password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={handleOnchangePassword}
            />
            </div>
        </div>
        <div className="show-password">
            <label><input type="checkbox" onChange={handleShowPasswordToggle}/>
            <span>Show Password</span>
            </label>
        </div>
        <div className="submit-container">
            <button onClick={handleSignIn} className="submit">SIGN IN</button>
        </div>
        <div className="register-link">
            <p>Don't have an account? <a href="register">Register here!</a></p>
        </div>
    </div>
  )
}

export default Login;

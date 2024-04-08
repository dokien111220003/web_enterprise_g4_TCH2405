import React, { useEffect, useState } from 'react';
import './Login.css';
import mail_icon from '../Assets/mail.png';
import password_icon from '../Assets/padlock.png';
import InputForm from '../InputForm/InputForm'
import { useMutation } from '@tanstack/react-query';
import * as UserService from '../../services/UserService';
import { updateUser } from '../../redux/slides/userSlide'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import * as message from '../Message/Message'
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation()

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
    if (isSuccess) {
      navigate('/student_page')
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        console.log('decode', decoded)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
    // const storage = localStorage.getItem('refresh_token')
    // const refreshToken = JSON.parse(storage)
    // const res = await UserService.getDetailsUser(id, token)
    // dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }

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
    <div className="login-page-container">
      <div className='login-container'>
        <div className="header">
          <div className="text-sign-in">Sign In</div>
        </div>
        <div className="inputs">
          <div className="input-field">
            <img src={mail_icon} alt="" className="icon" />
            <InputForm style={{ marginBottom: '0px' }} placeholder="abc@gmail.com"
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
          <label><input type="checkbox" onChange={handleShowPasswordToggle} />
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
    </div>
  )
}

export default Login;


import React, { useEffect } from 'react';

// Library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Navbar

import NavBarStudent from './Components/NavBarStudent/NavBarStudent';
import NavBar from "./Components/NavBar/NavBar";
import NavBarMC from "./Components/NavBar/NavBarMC";
import NavBarMM from "./Components/NavBar/NavBarMM";
// ADMIN
import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';
import FacultyAdmin from './Components/FacultyAdmin/FacultyAdmin';
import AddNewFaculty from './Components/FacultyAdmin/Add';
import EditFalcuty from './Components/FacultyAdmin/Edit';
import AccMain from './Components/AccAdmin/AccMain';
import AddAcc from './Components/AccAdmin/AddAcc';
import EditAcc from './Components/AccAdmin/EditAcc';
import TopicAdmin from './Components/TopicAdmin/TopicAdmin';
import EditTopicAdmin from './Components/TopicAdmin/EditTopic';
import AddNewTopic from './Components/TopicAdmin/AddTopic';
// Account ( phần chung lun )
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ChangePassword from './Components/Profile/ChangePassword';
import Profile from './Components/Profile/Account';
// Phần chung
import Slider from './Components/Slider/Slider';
import FooterAdmin from './Components/Footer/AdminFooter';
import SideBarAdmin from './Components/SideBar/SideBarAdmin';
import SideBarAD from './Components/SideBar/SideBarAD';
import Term from './Components/StudentPage/Term'
// Student
import StudentPage from './Components/StudentPage/StudentPage';
import Submission from './Components/StudentSubmit/StudentSubmit'
import Post from './Components/StudentPage/PostArticle'
import About from './Components/StudentPage/Aboutus'
// MC
import MC from './Components/MarketingCoordinator/MarketCoord'
import MC2 from './Components/MarketingCoordinator/MarketCoord2'
import Feedback from './Components/MarketingCoordinator/McFeedback'
import Review from './Components/MarketingCoordinator/McReview'
// MM
import MM from './Components/MarketingManager/MainPage'
import MMNav from './Components/MarketingManager/MMMNavBar'
import ViewContri from './Components/MarketingManager/ViewContri'
import ViewDetails from './Components/MarketingManager/ViewDetails'
import axios from 'axios'
import { useQueries, useQuery } from '@tanstack/react-query';

import { useDispatch, useSelector } from 'react-redux'
import { isJsonString } from './utilis';
import jwt_decode from "jwt-decode";
import * as UserService from '../src/services/UserService';
import { updateUser } from '../src/redux/slides/userSlide'

function App () {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    console.log('storageData', storageData)
  }, [])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
  }

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwt_decode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {      
        const data = await UserService.refreshToken()
        config.headers['token'] = `Bearer ${data?.access_token}`     
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

    return (
      <Router>
        <Routes>
          {/* Cho trang cua Admin*/}
          <Route path='/adminpage1' element={<><SideBarAdmin /><MainPageAdmin /></>} />
          <Route path='/adminpage' element={<><NavBar /><MainPageAdmin /><FooterAdmin/></>} />
          <Route path='/facultyadmin' element={<><NavBar /><FacultyAdmin /><FooterAdmin/></>} />
          <Route path='/add_faculty' element={<><NavBar /><AddNewFaculty /><FooterAdmin/></>} />
          <Route path='/edit_faculty/:id' element={<><NavBar /><EditFalcuty /><FooterAdmin/></>} />
          <Route path='/accadmin' element={<><NavBar /><AccMain /><FooterAdmin/></>} />
          <Route path='/add_user' element={<><NavBar /><AddAcc /><FooterAdmin/></>} />
          <Route path='/edit_user/:id' element={<><NavBar /><EditAcc /><FooterAdmin/></>} />
          <Route path='/topicadmin' element={<><NavBar /><TopicAdmin /><FooterAdmin/></>} />
          <Route path='/add_topic' element={<><NavBar /><AddNewTopic /><FooterAdmin/></>} />
          <Route path='/edit_topic/:id' element={<><NavBar /><EditTopicAdmin /><FooterAdmin/></>} />
          {/* Cho trang cua Phần Chung*/}
          <Route path='/login' element={<><NavBar /><Login /><FooterAdmin/></>} />
          <Route path='/register' element={<><NavBar /><Register /><FooterAdmin/></>} />
          <Route path='/slider' element={<><NavBar /><Slider /><FooterAdmin/></>} />
          <Route path='/sidebar' element={<SideBarAdmin />} />
          <Route path='/personal' element={<NavBarStudent><Profile/></NavBarStudent>} />
          <Route path='/change_password' element={<NavBarStudent><ChangePassword/></NavBarStudent>} />
          {/* Cho trang cua Marketing Manager */}
          <Route path='/marketing_manager_main' element={<NavBarMM><StudentPage /></NavBarMM>} />
          {/* <Route path='/marketing_manager' element={<NavBarMM><MM /></NavBarMM>} /> */}
          <Route path='/marketing_manager_main/contribution' element={<NavBarMM><ViewContri /></NavBarMM>}/>
          <Route path='/marketing_manager_main/contribution/details/:id' element={<NavBarMM><ViewDetails/></NavBarMM>} />
          <Route path='/aboutMM' element={<NavBarMM><About /></NavBarMM>} />
          <Route path='/termMM' element={<NavBarMM><Term /></NavBarMM>} />
          {/* Cho trang StudentPage sử dụng NavBar riêng */}
          <Route path='/student_page' element={<NavBarStudent><StudentPage /></NavBarStudent>} />
          <Route path='/term' element={<NavBarStudent><Term /></NavBarStudent>} />
          <Route path='/about' element={<NavBarStudent><About /></NavBarStudent>} />
          <Route path='/student_submit' element={<NavBarStudent><Submission/></NavBarStudent>} />
          <Route path='/post' element={<NavBarStudent><Post/></NavBarStudent>} />
          {/* Cho trang Marketing Coordinator sử dụng NavBar riêng */}
          <Route path='/mc_page' element={<NavBarMC><StudentPage/></NavBarMC>} />
          <Route path='/mc_page1' element={<NavBarMC><MC/></NavBarMC>} />
          <Route path='/mc_page2' element={<NavBarMC><MC2/></NavBarMC>} />
          <Route path='/mc_feedback/:id' element={<NavBarMC><Feedback/></NavBarMC>} />
          <Route path='/mc_review/:id' element={<NavBarMC><Review/></NavBarMC>} />
          <Route path='/aboutMC' element={<NavBarMC><About /></NavBarMC>} />
          <Route path='/termMC' element={<NavBarMC><Term /></NavBarMC>} />
        </Routes>
      </Router>
    );
}

export default App;
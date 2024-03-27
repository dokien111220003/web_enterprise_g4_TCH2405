import React from 'react';
import NavBarStudent from './Components/NavBarStudent/NavBarStudent';
import NavBar from "./Components/NavBar/NavBar";
import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';
import Login from './Components/Login/Login';
import FacultyAdmin from './Components/FacultyAdmin/FacultyAdmin';
import AddNewFaculty from './Components/FacultyAdmin/Add';
import EditFalcuty from './Components/FacultyAdmin/Edit';
import AccAdmin from './Components/AccAdmin/AccAdmin';
import TopicAdmin from './Components/TopicAdmin/TopicAdmin';
import EditTopicAdmin from './Components/TopicAdmin/EditTopic';
import AddNewTopic from './Components/TopicAdmin/AddTopic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Slider from './Components/Slider/Slider';
import StudentPage from './Components/StudentPage/StudentPage';
import FooterAdmin from './Components/Footer/AdminFooter';
import ChangePassword from './Components/Profile/ChangePassword';
import Profile from './Components/Profile/Account';
import Submission from './Components/StudentSubmit/StudentSubmit'
import MC from './Components/MarketingCoordinator/MarketCoord'
import Review from './Components/MarketingCoordinator/McReview'
import Post from './Components/StudentPage/PostArticle'
import MM from './Components/MarketingManager/MainPage'
import MMNav from './Components/MarketingManager/MMMNavBar'
import ViewContri from './Components/MarketingManager/ViewContri'
import ViewDetails from './Components/MarketingManager/ViewDetails'
import SideBarAdmin from './Components/SideBar/SideBarAdmin';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<><NavBar /><MainPageAdmin /><FooterAdmin/></>} />
          <Route path='/adminpage' element={<><NavBar /><MainPageAdmin /><FooterAdmin/></>} />
          <Route path='/facultyadmin' element={<><NavBar /><FacultyAdmin /><FooterAdmin/></>} />
          <Route path='/add_faculty' element={<><NavBar /><AddNewFaculty /><FooterAdmin/></>} />
          <Route path='/edit_faculty/:id' element={<><NavBar /><EditFalcuty /><FooterAdmin/></>} />
          <Route path='/accadmin' element={<><NavBar /><AccAdmin /><FooterAdmin/></>} />
          <Route path='/topicadmin' element={<><NavBar /><TopicAdmin /><FooterAdmin/></>} />
          <Route path='/add_topic' element={<><NavBar /><AddNewTopic /><FooterAdmin/></>} />
          <Route path='/edit_topic/:id' element={<><NavBar /><EditTopicAdmin /><FooterAdmin/></>} />
          <Route path='/login' element={<><NavBar /><Login /><FooterAdmin/></>} />
          <Route path='/register' element={<><NavBar /><Register /><FooterAdmin/></>} />
          <Route path='/slider' element={<><NavBar /><Slider /><FooterAdmin/></>} />
          <Route path='/sidebar' element={<SideBarAdmin />} />
          {/* Cho trang cua Marketing Manager */}
          <Route path='/marketing_manager' element={<><MMNav /><MM /><FooterAdmin/></>} />
          <Route path='/marketing_manager/contribution' element={<><MMNav /><ViewContri /><FooterAdmin/></>} />
          <Route path='/marketing_manager/contribution/details/:id' element={<><MMNav /><ViewDetails /><FooterAdmin/></>} />
          {/* Cho trang StudentPage sử dụng NavBar riêng */}
          <Route path='/student_page' element={<NavBarStudent><StudentPage /></NavBarStudent>} />
          <Route path='/change_password' element={<NavBarStudent><ChangePassword/></NavBarStudent>} />
          <Route path='/personal' element={<NavBarStudent><Profile/></NavBarStudent>} />
          <Route path='/student_submit' element={<NavBarStudent><Submission/></NavBarStudent>} />
          <Route path='/mc_page' element={<NavBarStudent><MC/></NavBarStudent>} />
          <Route path='/mc_review' element={<NavBarStudent><Review/></NavBarStudent>} />
          <Route path='/post' element={<NavBarStudent><Post/></NavBarStudent>} />
        </Routes>
      </Router>
    );
}

export default App;
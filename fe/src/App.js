// Library
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Navbar
import NavBarStudent from './Components/NavBarStudent/NavBarStudent';
import NavBar from "./Components/NavBar/NavBar";
import NavBarMC from "./Components/NavBar/NavBarMC";
// ADMIN
import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';
import FacultyAdmin from './Components/FacultyAdmin/FacultyAdmin';
import AddNewFaculty from './Components/FacultyAdmin/Add';
import EditFalcuty from './Components/FacultyAdmin/Edit';
import AccAdmin from './Components/AccAdmin/AccAdmin';
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
// Student
import StudentPage from './Components/StudentPage/StudentPage';
import Submission from './Components/StudentSubmit/StudentSubmit'
import Post from './Components/StudentPage/PostArticle'
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

const App = () => {
    return (
      <Router>
        <Routes>
          {/* Cho trang cua Admin*/}
          <Route path='/' element={<><SideBarAdmin /><MainPageAdmin /></>} />
          <Route path='/adminpage' element={<><NavBar /><MainPageAdmin /><FooterAdmin/></>} />
          <Route path='/facultyadmin' element={<><NavBar /><FacultyAdmin /><FooterAdmin/></>} />
          <Route path='/add_faculty' element={<><NavBar /><AddNewFaculty /><FooterAdmin/></>} />
          <Route path='/edit_faculty/:id' element={<><NavBar /><EditFalcuty /><FooterAdmin/></>} />
          <Route path='/accadmin' element={<><NavBar /><AccAdmin /><FooterAdmin/></>} />
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
          <Route path='/marketing_manager' element={<><MMNav /><MM /><FooterAdmin/></>} />
          <Route path='/marketing_manager/contribution' element={<><MMNav /><ViewContri /><FooterAdmin/></>} />
          <Route path='/marketing_manager/contribution/details/:id' element={<><MMNav /><ViewDetails /><FooterAdmin/></>} />
          {/* Cho trang StudentPage sử dụng NavBar riêng */}
          <Route path='/student_page' element={<NavBarStudent><StudentPage /></NavBarStudent>} />
          <Route path='/student_submit' element={<NavBarStudent><Submission/></NavBarStudent>} />
          <Route path='/post' element={<NavBarStudent><Post/></NavBarStudent>} />
          {/* Cho trang Marketing Coordinator sử dụng NavBar riêng */}
          <Route path='/mc_page' element={<NavBarMC><MC/></NavBarMC>} />
          <Route path='/mc_page2' element={<NavBarMC><MC2/></NavBarMC>} />
          <Route path='/mc_feedback/:id' element={<NavBarMC><Feedback/></NavBarMC>} />
          <Route path='/mc_review/:id' element={<NavBarMC><Review/></NavBarMC>} />
        </Routes>
      </Router>
    );
}

export default App;
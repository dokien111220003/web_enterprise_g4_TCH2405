import React from 'react';
import NavBarStudent from './Components/NavBarStudent/NavBarStudent';
import NavBar from "./Components/NavBar/NavBar";
import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';
import Login from './Components/Login/Login';
import FacultyAdmin from './Components/FacultyAdmin/FacultyAdmin';
import AddNewFalcuty from './Components/FacultyAdmin/Add';
import EditFalcuty from './Components/FacultyAdmin/Edit';
import AccAdmin from './Components/AccAdmin/AccAdmin';
import TopicAdmin from './Components/TopicAdmin/TopicAdmin';
import EditTopicAdmin from './Components/TopicAdmin/EditTopic';
import AddNewTopic from './Components/TopicAdmin/AddTopic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Slider from './Components/Slider/Slider';
import StudentPage from './Components/StudentPage/StudentPage';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<><NavBar /><MainPageAdmin /></>} />
          <Route path='/facultyadmin' element={<><NavBar /><FacultyAdmin /></>} />
          <Route path='/add_faculty' element={<><NavBar /><AddNewFalcuty /></>} />
          <Route path='/edit_faculty/:id' element={<><NavBar /><EditFalcuty /></>} />
          <Route path='/accadmin' element={<><NavBar /><AccAdmin /></>} />
          <Route path='/topicadmin' element={<><NavBar /><TopicAdmin /></>} />
          <Route path='/add_topic' element={<><NavBar /><AddNewTopic /></>} />
          <Route path='/edit_topic/:id' element={<><NavBar /><EditTopicAdmin /></>} />
          <Route path='/login' element={<><NavBar /><Login /></>} />
          <Route path='/register' element={<><NavBar /><Register /></>} />
          <Route path='/slider' element={<><NavBar /><Slider /></>} />
          {/* Cho trang StudentPage sử dụng NavBar riêng */}
          <Route path='/student_page' element={<><NavBarStudent /><StudentPage /></>} />
        </Routes>
      </Router>
    );
}

export default App;

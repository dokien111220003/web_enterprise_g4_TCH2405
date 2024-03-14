// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login/>} />
//         <Route path="/" element={<MainPageAdmin/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import MainPageAdmin from './Components/MainPageAdmin/MainPageAdmin';
import Login from './Components/Login/Login';
import FacultyAdmin from './Components/FacultyAdmin/FacultyAdmin';
import AddNewFalcuty from './Components/FacultyAdmin/Add';
import EditFalcuty from './Components/FacultyAdmin/Edit';
import AccAdmin from './Components/AccAdmin/AccAdmin';
import TopicAdmin from './Components/TopicAdmin/TopicAdmin';
import EditTopicAdmin from './Components/TopicAdmin/EditTopic';
import AddNewTopic from './Components/TopicAdmin/AddTopic';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Slider from './Components/Slider/Slider';

const App = () => {
    return (
      <>
        <Router>
          <NavBar/>
            <Routes>
              <Route path='/' element={<MainPageAdmin/>} />
            </Routes>
            <Routes>
              <Route path='/facultyadmin' element={<FacultyAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/add_faculty' element={<AddNewFalcuty/>}/>
            </Routes>
            <Routes>
              <Route path='/edit_faculty/:id' element={<EditFalcuty/>}/>
            </Routes>
            <Routes>
              <Route path='/accadmin' element={<AccAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/topicadmin' element={<TopicAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/edit_topic/:id' element={<EditTopicAdmin/>}/>
            </Routes>
            <Routes>
              <Route path='/add_topic' element={<AddNewTopic/>}/>
            </Routes>
            <Routes>
              <Route path='/login' element={<Login/>} />
            </Routes>
            <Routes>
              <Route path='/register' element={<Register/>} />
            </Routes>
            <Routes>
              <Route path='/slider' element={<Slider/>} />
            </Routes>
        </Router>
      </>
    )
}

export default App
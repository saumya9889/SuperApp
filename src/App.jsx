import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/gloria-hallelujah'; 
import SignUp from './Page/SignUp/index.jsx';
import HomePage from './Page/HomePage/index.jsx';
import {UserPage} from './Page/UserPage/index.jsx';
import {UserNote} from './Page/UserNote/index.jsx';
import './assets/styles/global.scss';
import {UserProvider} from './Component/UserContext.jsx';




function App (){

  return (
    <>
    <UserProvider>
   <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/usernote" element={<UserNote />} />

      </Routes>
      
    </Router>
    </UserProvider>
   
    </>
  )
}

export default App;

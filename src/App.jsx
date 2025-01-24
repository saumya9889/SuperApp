import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/gloria-hallelujah'; 
import SignUp from './Page/SignUp/index.jsx';
import HomePage from './Page/HomePage/index.jsx';
import {UserPage} from './Page/UserPage/index.jsx';
import './assets/styles/global.scss';




function App (){

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App;

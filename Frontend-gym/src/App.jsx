import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login/login';
import Home from './components/Home/home';
import Signup from './components/Signup/signup';
import { Routes, Route } from 'react-router-dom';
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */



const App = () => {
  return (
     
      <Routes>
        
        
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path ="/signup" element={<Signup/>}/>
      </Routes>
  );
};

export default App;

import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login/login';
import Home from './components/Home/home';
import Signup from './components/Signup/signup';
import MemberAdded from './components/Members/memberadded';
import { Routes, Route } from 'react-router-dom';
import Join from "./components/Join/join";
import Contact from "./components/Contact/contact";


/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */



const App = () => {
  return (
     
      <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />        
        <Route path ="/signup" element={<Signup/>}/>
        <Route path="/join" element={<Join />} />
        <Route path="/members" element={<MemberAdded />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Add more routes as needed */}

      </Routes>
  );
};

export default App;

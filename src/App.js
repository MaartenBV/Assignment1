import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

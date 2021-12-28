import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

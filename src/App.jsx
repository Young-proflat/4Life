import React from 'react';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About';




function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </>
  );
}

export default App

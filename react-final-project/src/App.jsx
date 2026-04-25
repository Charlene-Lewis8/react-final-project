import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import Library from './pages/library/Library';
import Houses from './pages/houses/Houses';


function App()  {
  

  return (
   
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/library" element={<Library />} />
       <Route path="/houses" element={<Houses />} />
     </Routes>
     <Footer />
   </BrowserRouter>
   
  );
}

export default App

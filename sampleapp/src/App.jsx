// import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DogImage from './pages/dogimage/dogImagecontext';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogimage" element={<DogImage />} />
      </Routes>
    </Router>
  );
}
export default App






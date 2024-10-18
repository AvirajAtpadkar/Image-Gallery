import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import ImageDetails from './components/ImageDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

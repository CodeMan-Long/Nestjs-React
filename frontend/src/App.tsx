import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Statistics App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="save" element={<Home />} />
        <Route path="view" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

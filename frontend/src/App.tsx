import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import SaveForm from './components/SaveForm';
import ViewForm from './components/ViewForm';

function App() {
  return (
    <div className="App">
      <h1>Statistics App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="save" element={<SaveForm />} />
        <Route path="view" element={<ViewForm />} />
      </Routes>
    </div>
  );
}

export default App;

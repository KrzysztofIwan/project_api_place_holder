import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;

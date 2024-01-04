import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import CreateArticle from './Components/CreateArticle/CreateArticle';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route path="/CreateArticle" element={<CreateArticle/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

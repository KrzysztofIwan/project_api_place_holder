import './App.css';
import React from 'react';
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Posts from './Components/Posts/Posts';
import Login from './Components/Login/Login';
import Searcher from './Components/Searcher/Searcher';
import UserProfil from './Components/UserProfil/UserProfil';

function App() {
  const [cookies, setCookie] = useCookies(["userData"]);

  function handleLogin(user) {
    setCookie("userData", user, { path: "/" });
  }

  return (
    <CookiesProvider>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Login" element={<Login onLogin={handleLogin}/>}/>
        <Route path="/UserProfil" element={<UserProfil/>}/>
        <Route path='/Searcher' element={<Searcher/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

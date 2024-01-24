import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { useCookies } from 'react-cookie';

function Navigation() {
  const [cookies] = useCookies(['userData']);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = () => {
      return cookies?.userData?.userName !== undefined;
    };
    setLogged(isUserLogged());
  }, [cookies.userData]);

  return (
    <nav>
      <Link to="/">Strona Główna</Link>
      <Link to="/CreateArticle">Tworzenie Posta</Link>
      {logged ? (
        <>
        <Link to="UserProfil">Profil</Link>
        <Link to="Login">Wyloguj</Link>
        </>        
      ) : (
        <Link to="Login">Logowanie</Link>
      )}
      
      <Link to="Searcher">Wyszukiwanie zdjęć i użytkowników</Link>
    </nav>
  );
}

export default Navigation;
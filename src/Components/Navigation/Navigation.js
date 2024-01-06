import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){    
        return(
            <nav>
                <Link to="/">Strona Główna</Link>
                <Link to="/CreateArticle">Tworzenie Posta</Link>
                <Link to="Login">Logowanie</Link>
                <Link to="Searcher">Wyszukiwanie zdjęć i użytkowników</Link>
            </nav>
        );
}

export default Navigation;
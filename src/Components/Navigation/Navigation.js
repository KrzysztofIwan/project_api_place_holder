import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){    
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/CreateArticle">Tworzenie Posta</Link>
            </nav>
        );
}

export default Navigation;
import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userLogged: false,
        }
    }
    
    render(){
        return(
            <nav>
                <ul>
                    
                    <li>test 1</li>
                    <li>test 2</li>
                </ul>
            </nav>
        );
    }
}
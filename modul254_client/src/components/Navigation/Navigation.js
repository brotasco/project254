import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.scss';

export default class Navigation extends React.Component{
    render(){
        return(
            <div className='navigation'>
                <nav>
                    <p className="mainLabel">DirectContact</p>
                    <ul>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
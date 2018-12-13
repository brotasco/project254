import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './components/auth';

import './Body.scss';

export default class Body extends React.Component{
    render(){
        return(
            <div className='body'>
                <Switch>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}
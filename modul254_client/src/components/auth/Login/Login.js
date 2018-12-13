import React from 'react';
import '../auth.scss';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formValue: {}
        }
    }

    changeFormValue(newValue, attributeName){
        this.setState({
            formValue: {
                ...this.state.formValue,
                [attributeName]: newValue
            }
        });
    }

    render(){
        return(
            <div className='login'>
                <h2>Login</h2>
                <form>
                    <input onChange={(e) => this.changeFormValue(e.target.value, 'username')} type="text" placeholder="username"/><br/>
                    <input onChange={(e) => this.changeFormValue(e.target.value, 'password')} type="password" placeholder="Password"/><br/>
                    <input onClick={() => console.log(this.state.formValue)} className="submit" type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
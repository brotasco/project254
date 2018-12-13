import React from 'react';
import axios from 'axios';
import firebase from 'firebase';

import '../auth.scss';

export default class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formValue: {},
            imgPreview: null,
            imgFile: null,
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

    readFile(e){
        if(e.target.files && e.target.files[0]){
            this.setState({
                imgPreview: URL.createObjectURL(e.target.files[0]),
                imgFile: e.target.files[0]
            });
        } else {
            this.setState({
                imgPreview: null,
                imgFile: null,
            });
        }
    }

    resetPic(){
        this.refs.pic.value="";
        this.setState({
            imgPreview: null,
            imgFile: null,
        });
    }

    uploadImage(){
        firebase.storage()
        .ref("files/profilePictures/")
        .child(this.state.imgFile.name)
        .getDownloadURL()
        .then((url) => console.log(url));
    }

    register(){
        if(this.state.password === this.state.repassword){
            this.setState({
                formValue: {
                    ...this.state.formValue,
                    profilePic: this.state.imgFile,
                }
            });

            var newUser = {
                username: this.state.formValue.username,
                firstname: this.state.formValue.firstname,
                lastname: this.state.formValue.lastname,
                email: this.state.formValue.email,
                addresses: null,
                password: this.state.formValue.password,
                profilePic: this.state.imgFile.name,
            }
            console.log(80);
            axios.put('http://localhost:8080/user/register', newUser).then((response) => {
                if(response.data.status){
                    this.uploadImage();
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    
    render(){
        return(
            <div className='register'>
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Username" onChange={(e) => this.changeFormValue(e.target.value, 'username')}/><br/>
                    <input type="text" placeholder="Firstname" onChange={(e) => this.changeFormValue(e.target.value, 'firstname')}/><br/>
                    <input type="text" placeholder="Lastname" onChange={(e) => this.changeFormValue(e.target.value, 'lastname')}/><br/>
                    <input type="email" placeholder="Email" onChange={(e) => this.changeFormValue(e.target.value, 'email')}/><br/>
                    <input type="password" placeholder="Password" onChange={(e) => this.changeFormValue(e.target.value, 'password')}/><br/>
                    <input type="password" placeholder="Password" onChange={(e) => this.changeFormValue(e.target.value, 'repassword')}/><br/>
                    <input ref="pic" type="file" placeholder="Picture" onChange={(e) => this.readFile(e)}/><br/>
                    {
                        this.state.imgPreview == null ? 
                        <div></div> : 
                        <div onClick={() => this.resetPic()}>
                            <img alt="" height="100" src={this.state.imgPreview}/><br/>
                        </div>
                    }
                    <input onClick={() => this.register()}  type="button" value="Register" accept="image/*"/>
                </form>
            </div>
        )
    }
}
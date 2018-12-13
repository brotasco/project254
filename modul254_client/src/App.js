import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './Header';
import Body from './Body';

const config = {
  apiKey: "AIzaSyAZB7uTjZ9563gPRdw5_r-UDihCCo2h12I",
  authDomain: "modul254project.firebaseapp.com",
  databaseURL: "https://modul254project.firebaseio.com",
  projectId: "modul254project",
  storageBucket: "modul254project.appspot.com",
  messagingSenderId: "794676217911"
};

class App extends Component {
  constructor(props){
    super(props);
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

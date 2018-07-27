import React, { Component } from 'react';
import logo from '../logo.svg';
import Landing_Page from '../pages/landing'
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            < Route exact path="/" render={ () => <Landing_Page />}/>
        </BrowserRouter>
    );
  }
}

export default App;

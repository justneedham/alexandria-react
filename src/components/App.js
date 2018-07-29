import React, { Component } from 'react';
import logo from '../logo.svg';
import LandingPage from '../pages/landing'
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            < Route exact path="/" render={ () => <LandingPage />}/>

        </BrowserRouter>
    );
  }
}

export default App;

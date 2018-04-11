import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header'
import About from './components/About'
import Pluses from './components/Pluses'
import Scrinshots from './components/Scrinshots'
import Reviews from './components/Reviews'
import Buy from './components/Buy'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Payment from './components/Payment'


class App extends React.Component {
  render() {
    return(
      <Router>
      <div>
        <Header />
        <About />
        <Pluses />
        <Scrinshots />
        <Reviews />
          <Route exact path='/' component={Buy} />
          <Route exact path='/Payment' component={Payment} />
        <Contacts />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

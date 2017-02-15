import React, { Component } from 'react';
//import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

import './styles/App.css';
import Carousel from './components/carousel';
import Header from './components/header';
import Footer from './components/footer';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Carousel></Carousel>
        <Grid></Grid>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;


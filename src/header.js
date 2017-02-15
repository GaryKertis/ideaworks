import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/header.css';

class Header extends Component {
  render() {
    var logoStyle = {
      backgroundImage: 'url('+logo+')'
    };
    return (
      <div className="appHeader">
        <div className="headerBody">
          <div className="logo" style={logoStyle}>
          </div>
          <div className="appNav">
            <ul>
              <li className="hidden-xs">212.555.5555</li>
              <li>LOGIN</li>
              <li>&#9776;</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
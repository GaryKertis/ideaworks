import React, { Component } from 'react';
import './styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="appFooter">
      &#169; 2017 &ndash; Sparta Plaesant - <a href="">Instagram</a> - <a href="">Facebook</a> - <a href="">Twitter</a>
      </div>
    );
  }
}

export default Footer;
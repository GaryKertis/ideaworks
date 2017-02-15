import React, { Component } from 'react';
import '../styles/slide.css';
var dateFormat = require("dateformat");

class Slide extends Component {
  render() {
  var divStyle = {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+this.props.model.image+')'
  }
    return (
          <div className="slide" style={divStyle}>
            <div className="slideText">
              <div className="slideHeader">{this.props.model.title1}<br />{this.props.model.title2}</div>
              <div className="slideSubHeader">{dateFormat(this.props.model.subTitle, "mmmm d, yyyy")}</div>
              <p className="slideContent">{this.props.model.content}</p>
            </div>
          </div>
    );
  }
}

export default Slide;
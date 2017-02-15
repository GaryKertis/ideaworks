import React, { Component } from 'react';
import '../styles/griditem.css';
var dateFormat = require("dateformat");

class GridItem extends Component {
  render() {
    return (
      <div className="gridItem">
        <div className="gridItemImage"><img src={this.props.content.image} alt={this.props.content.title} /></div>
        <div className="gridItemDate">{dateFormat(this.props.content.date, "mmmm d yyyy").toUpperCase()}</div>
        <div className="gridItemTitle"><a href="">{this.props.content.title}</a></div>
        <div className="gridItemSubTitle">Presented by <span>{this.props.content.subTitle.toUpperCase()}</span></div>
        <hr />
      </div>
    );
  }
}

export default GridItem;
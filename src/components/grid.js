import React, { Component } from 'react';
import '../styles/grid.css';
import GridItem from './griditem';
import GridContent from '../services/gridcontent';


class Grid extends Component {
  render() {
    var content = new GridContent().items;
    return (
      <div className="container grid">
      	<div className="row hidden-xs">
      		<div className="col-sm-4">
      			<GridItem content={content[0]}></GridItem>
      			<GridItem content={content[3]}></GridItem>
      		</div>
      		<div className="col-sm-4">
      			<GridItem content={content[1]}></GridItem>
      			<GridItem content={content[4]}></GridItem>
      		</div>
      		<div className="col-sm-4">
      			<GridItem content={content[2]}></GridItem>
      			<GridItem content={content[5]}></GridItem>
      		</div>
      	</div>
      	<div className="row hidden-sm hidden-lg hidden-md">
      		<div className="col-xs-6">
      			<GridItem content={content[0]}></GridItem>
      			<GridItem content={content[2]}></GridItem>
      			<GridItem content={content[4]}></GridItem>
      		</div>
      		<div className="col-xs-6">
      			<GridItem content={content[1]}></GridItem>
      			<GridItem content={content[3]}></GridItem>
      			<GridItem content={content[5]}></GridItem>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Grid;
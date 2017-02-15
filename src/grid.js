import React, { Component } from 'react';
import './styles/grid.css';
import GridItem from './griditem';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';

var randomWords = require('random-words');

var images = [img1, img2, img3, img4, img5, img6];

class Grid extends Component {
  render() {

  	var content = [];
  	for (var i = 0; i < 6; i++) {
  		var title = randomWords({ min: 5, max: 8 }).join(" ") + ".";
    	title = title.charAt(0).toUpperCase() + title.slice(1);
  		content.push({
  			image: images[i],
  			title: title,
  			subTitle: "Lorem Ipsum",
  			date: randomDate(new Date(2017, 0, 1), new Date(2017, 12, 31))
  		})
  	}

  	content = content.sort((a, b) => {
  		return a.date - b.date;
  	})

  	function randomDate(start, end) {
    	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}	


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
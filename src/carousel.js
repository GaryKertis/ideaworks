import React, { Component } from 'react';
import Slide from './slide';
import hero1 from './images/hero1.jpg';
import hero2 from './images/hero2.jpg';
import hero3 from './images/hero3.jpg';
import './styles/carousel.css';
var randomWords = require('random-words');


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.startTimer();

    window.addEventListener('focus', () => {
      this.startTimer();
    },false);

    window.addEventListener('blur', () => {
      clearInterval(this.timer);
    },false);
  }

  clicks = 1;
  timer = null;

  startTimer() {
    console.log('start');
    this.timer = setInterval(() => {
      this.moveOne();
    }, 5000)
  }

  moveOne() {
    var el = this.refs.carousel;
    var amount = -100 * this.clicks + "%";

    el.childNodes[0].childNodes.forEach(node => {
      node.style.transform = "translate(" + amount + ", 0px)"
    });

    var dots = el.childNodes[1].childNodes;

    dots.forEach(node => {
      node.className = node.className.replace(/active\b/,'');
    });

    dots[this.clicks].className += " active";

    this.clicks++
    if (this.clicks >= 3) this.clicks = 0;
  }

  handleClick(event) {
    event.preventDefault();
    this.moveOne();
    clearInterval(this.timer);
    this.startTimer();
  }

  xDown = null;                                                        

  handleTouchStart(evt) {                                         
      this.xDown = evt.touches[0].clientX;                                      
  };                                                

  handleTouchMove(evt) {
      if ( ! this.xDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var xDiff = this.xDown - xUp;
        if ( xDiff > 0 ) {
            /* left swipe */ 
            console.log('left');
        } else {
            /* right swipe */
            console.log('right');
        }                       
      /* reset values */
      this.xDown = null;
  };

  render() {
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    } 
    var text = [];
    var images = [hero1, hero2, hero3];
    for (var i = 0; i < 3; i++) {
      var title1 = randomWords(1).join(" ") + ":";
      title1 = title1.charAt(0).toUpperCase() + title1.slice(1);
      var title2 = randomWords({ min: 3, max: 5 }).join(" ") + ".";
      title2 = title2.charAt(0).toUpperCase() + title2.slice(1);
      var content = randomWords({ min: 15, max: 20 }).join(" ") + ".";
      content = content.charAt(0).toUpperCase() + content.slice(1);
      text.push({
        image: images[i],
        title1: title1,
        title2: title2,
        subTitle: randomDate(new Date(2017, 0, 1), new Date(2017, 12, 31)),
        content: content
      });
    }
    return (
      <div className="carousel" ref="carousel" onClick={this.handleClick} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove}>
          <div className="slides">
            <Slide model={text[0]}></Slide>
            <Slide model={text[1]}></Slide>
            <Slide model={text[2]}></Slide>
          </div>
          <div className="dots">
            <span className="dot1 active">&#9899;</span>
            <span className="dot2">&#9899;</span>
            <span className="dot2">&#9899;</span>
          </div>
      </div>
    );
  }
}

export default Carousel;
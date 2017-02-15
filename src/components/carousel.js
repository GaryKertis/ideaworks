import React, { Component } from 'react';
import Slide from './slide';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import '../styles/carousel.css';
var randomWords = require('random-words');


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.startTimer();

    window.addEventListener('focus', () => {
      this.startTimer();
    },false);

    window.addEventListener('blur', () => {
      clearInterval(this.timer);
    },false);
  }

  currentSlide = 1;
  timer = null;

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.moveForward();
    }, 5000)
  }

  moveForward() {
    var amount = 0; 
    if (this.currentSlide === 1) amount = "-100%";
    if (this.currentSlide === 2) amount = "-200%"
    if (this.currentSlide === 3) amount = "0%";
    this.move(amount);
    this.currentSlide++;
    if (this.currentSlide > 3) this.currentSlide = 1;
    this.updateDots();
  }

  moveBackward() {
    var amount = 0; 
    if (this.currentSlide === 1) amount = "-200%";
    if (this.currentSlide === 2) amount = "0%"
    if (this.currentSlide === 3) amount = "-100%";
    this.move(amount);
    this.currentSlide--;
    if (this.currentSlide < 1) this.currentSlide = 3;
    this.updateDots();
  }

  move(amount) {
    var el = this.refs.carousel;
    el.childNodes[0].childNodes.forEach(node => {
      node.style.transform = "translate(" + amount + ", 0px)"
    });
  }

  updateDots() {
    var el = this.refs.carousel;
    var dots = el.childNodes[1].childNodes;
    dots.forEach(node => {
      node.className = node.className.replace(/active\b/,'');
    });
    dots[this.currentSlide - 1].className += " active";
  }

  handleClick(event) {
    event.preventDefault();
    this.moveForward();
    this.startTimer();
  }

  xDown = null;                                                        

  handleTouchStart(evt) {
      evt.preventDefault();
      this.xDown = evt.touches[0].clientX;                                      
  };                                                

  handleTouchMove(evt) {
      evt.preventDefault();
      if ( ! this.xDown ) {
          return;
      }

      var xUp = evt.touches[0].clientX;                                    
      var xDiff = this.xDown - xUp;
        if ( xDiff > 0 ) {
            /* left swipe */ 
            this.moveForward();
            this.startTimer();
        } else {
            /* right swipe */
            this.moveBackward();
            this.startTimer();
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
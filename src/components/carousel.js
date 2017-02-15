import React, { Component } from 'react';
import Slide from './slide';
import HeroContent from '../services/herocontent';
import '../styles/carousel.css';


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

  heroContent = new HeroContent();
  xDown = null;                                                        
  initialized = false;
  currentSlide = 1;
  timer = null;
  transitioning = false;

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.moveForward();
    }, 5000)
  }

  initCarousel() {
    function whichTransitionEvent(){
      var t;
      var el = document.createElement('fakeelement');
      var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for(t in transitions){
          if( el.style[t] !== undefined ){
              return transitions[t];
          }
      }
    }
    var transitionEnd = whichTransitionEvent();
    this.refs.carousel.childNodes[0].childNodes[0].addEventListener(transitionEnd, () => this.transitionDone(), false);
    this.initialized = true;
  }

  moveForward() {
    this.transitioning = true;
    var amount = this.currentSlide * -100 + "%";
    this.move(amount);
    this.currentSlide++;
    if (this.currentSlide > 3) {
      this.currentSlide = 1;
      this.forwardReset = true;
    }
    this.updateDots();
  }

  reset(amount) {
      this.refs.carousel.childNodes[0].childNodes.forEach(node => {
        node.style.transition = "transform 0.0001s";
        node.style.transform = "translate(" + amount + ", 0px)"
      });
  }

  transitionDone() {
    this.transitioning = false;
    if (this.forwardReset) {
      this.reset("0px")
      this.forwardReset = false;
    } else if (this.backwardReset) {
      this.reset("-200%");
      this.backwardReset = false;
    } else {
        this.refs.carousel.childNodes[0].childNodes.forEach(node => {
        node.style.transition = "transform 0.5s";
      });
    }
  };

  moveBackward() {
    this.transitioning = true;
    var amount = 0; 
    if (this.currentSlide === 1) amount = "100%";
    if (this.currentSlide === 2) amount = "0%"
    if (this.currentSlide === 3) amount = "-100%";
    this.move(amount);
    this.currentSlide--;
    if (this.currentSlide < 1) {
      this.backwardReset = true;
      this.currentSlide = 3;
    }
    this.updateDots();
  }

  move(amount) {
    if (!this.initialized) this.initCarousel();
    this.refs.carousel.childNodes[0].childNodes.forEach(node => {
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
    if (!this.transitioning) {
      this.moveForward();
      this.startTimer();
    }
  }

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
            if (!this.transitioning) {
              this.moveForward();
              this.startTimer();
            }
        } else {
            /* right swipe */
            if (!this.transitioning) {
              this.moveBackward();
              this.startTimer();
            }
        }                       
      /* reset values */
      this.xDown = null;
  };

  render() {
    var text = this.heroContent.items;
    return (
      <div className="carousel" ref="carousel" onClick={this.handleClick} onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove}>
          <div className="slides">
            <Slide model={text[2]}></Slide>
            <Slide model={text[0]}></Slide>
            <Slide model={text[1]}></Slide>
            <Slide model={text[2]}></Slide>
            <Slide model={text[0]}></Slide>
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
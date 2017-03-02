import React from 'react';
import { TweenLite, TimelineMax, CSSPlugin, TweenMax } from 'gsap';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      style: {
        top: `${(this.props.row * (400 / 3 + 5) - (400 / 3))}px`,
        left: `${(this.props.col * 105 - 100)}px`,
        zIndex: '0',
        position: 'absolute'
      },
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.translate(150, 100)
    ctx.rotate(Math.PI/4);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.rect(0, 0, 150, 150);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
    if (!this.state.selected) {
      this.zoom = new TimelineMax()
      .set(this.canvas, {zIndex: 1})
      .to(this.canvas, 0.2, {
        scale: 5,
        ease: Power2.easeOut
      }, '+=0.1')
      .to(this.canvas, 0.2, {
        css: {
          top: 280,
          left: 220,
        },
      }, 0)
      .to(this.canvas, 0.2, {
        css: {
          position: 'fixed'
        },
      }, '+=0.1')
      this.setState({selected: true});
    } else {
      this.zoom.reverse();
      this.setState({selected: false});
    }
  }

  render(){
    return (
      <canvas
        onClick={this.handleClick}
        style={this.state.style}
        className="frame shadow"
        width="300px"
        height="400px"
        ref={el => {this.canvas = el;}}
      />
    )
  }
}

export default Frame;
import React from 'react';
import { TweenLite, TimelineMax, CSSPlugin, TweenMax } from 'gsap';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.drawCard = this.drawCard.bind(this);
  }

  componentDidMount() {
    this.drawCard();

    this.zoom = new TimelineLite({paused: true})
      .set(this.canvas, {zIndex: 1})
      .to(this.canvas, 0.1, {
        scale: 5,
        ease: Power2.easeOut
      }, '+=0.1');
  }

  drawCard() {
    const ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.translate(150, 100)
    ctx.rotate(Math.PI/4);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#e5e5e5';
    ctx.strokeRect(0, 0, 130, 130);
    ctx.restore();

    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 2; row++) {
        let y = row % 2 === 0 ? 345 : 295;
        let x = col * 50 + 5;
        if (col === 2 && row === 1 ) {
          break;
        } else {
          ctx.save();
          ctx.translate(x, y);
          ctx.lineWidth = 5;
          ctx.strokeStyle = '#e5e5e5';
          ctx.strokeRect(0, 0, 50, 50);
          ctx.restore();
        }
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.selected) {
      this.zoom.play(0);
    } else {
      this.zoom.reverse();
    }
    this.setState({selected: !this.state.selected});
  }

  render(){
    return (
      <canvas
        onClick={this.handleClick}
        className="frame shadow"
        width="300px"
        height="400px"
        ref={el => {this.canvas = el;}}
      />
    )
  }
}

export default Frame;
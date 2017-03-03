import React from 'react';
import { TweenLite, TimelineMax, CSSPlugin, TweenMax } from 'gsap';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: false,
      drawing: false,
      style: {
        height: 'calc(100% / 9)',
        width: 'calc(100% / 9)',
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
    this.draw = this.draw.bind(this);

    this.currentMousePosition = {
        x: 0,
        y: 0
    };

    this.lastMousePosition = {
        x: 0,
        y: 0
    };
  }

  componentDidMount() {
    this.drawFrame();

    this.zoom = new TimelineLite({paused: true})
      .set(this.canvas, {zIndex: 1})
      .to(this.canvas, 0.1, {
        // scale: 5,
        ease: Power2.easeOut
      }, '+=0.1');
  }

  drawFrame() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.save();
    this.ctx.translate(150, 100)
    this.ctx.rotate(Math.PI/4);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#e5e5e5';
    this.ctx.strokeRect(0, 0, 130, 130);
    this.ctx.restore();

    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < 2; row++) {
        let y = row % 2 === 0 ? 345 : 295;
        let x = col * 50 + 5;
        if (col === 2 && row === 1 ) {
          break;
        }
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#e5e5e5';
        this.ctx.strokeRect(0, 0, 50, 50);
        this.ctx.restore();
      }
    }
  }

  draw(start, end, color = 'black') {
    // console.log('drawing', start, end)
    // this.ctx.scale(5, 5);
    // this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  handleMouseDown(e) {
    this.setState({drawing: true})
    this.currentMousePosition.x = ((e.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.canvas.clientWidth));
    this.currentMousePosition.y = ((e.pageY - this.canvas.offsetTop) * (this.canvas.height / this.canvas.clientHeight));
  }

  handleMouseUp(e) {
    this.setState({drawing: false});
  }

  handleMouseMove(e) {
    if (!this.state.drawing || !this.state.selected) return;

    this.lastMousePosition.x = this.currentMousePosition.x;
    this.lastMousePosition.y = this.currentMousePosition.y;

    this.currentMousePosition.x = ((e.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.canvas.clientWidth));
    this.currentMousePosition.y = ((e.pageY - this.canvas.offsetTop) * (this.canvas.height / this.canvas.clientHeight));

    console.log('pageX', e.pageX - this.canvas.offsetLeft, this.canvas.width / this.canvas.clientWidth, 'currentMousePosition', this.currentMousePosition.x)
    this.draw(this.lastMousePosition, this.currentMousePosition);
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
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
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
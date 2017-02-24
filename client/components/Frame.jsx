import React from 'react';

class Frame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      style: {
        width: 'calc(100vw / 9 - 10px)',
        top: `${this.props.index * 140}px`
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
    console.log('clicked')
    if (!this.state.selected) {
      this.setState({
        style: {
          zIndex: '9999',
          height: '90vh',
          width: 'calc(90vh * 0.75)',
          maxWidth: 'calc(90vh * 0.75)',
          top: '5vh',
          left: '5vw'
        },
        selected: true
      });
    } else {
      this.setState({
        style: {
          zIndex: '0',
          width: 'calc(100vw / 9 - 10px)',
          top: `${this.props.index * 140}px`
        },
        selected: false
      });
    }
  }

  render(){
    return (
      <div
        className="col-1-9"
        onClick={this.handleClick}
      >
        <canvas
          style={this.state.style}
          className="frame shadow"
          width="300px"
          height="400px"
          ref={el => {this.canvas = el;}}
        />
      </div>
    )
  }
}

export default Frame;
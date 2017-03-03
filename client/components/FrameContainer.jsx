import React from 'react';
import Frame from './Frame.jsx';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';


class FrameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.frames = document.getElementsByClassName('frame');
    const tl = new TimelineLite();
    tl.staggerFromTo(this.frames, 0.2, {x: 100, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power1.easeOut}, 0.01)
  }

  render() {
    const frameArray = [];
    for (let row = 1; row <= 9; row++) {
      for (let col = 1; col <= 9; col++) {
        frameArray.push(
          <Frame
            key={[col, row]}
            col={col}
            row={row}
          />
        );
      }
    }
    return (
      <div>
        {
        frameArray
        }
      </div>
    );
  }
}

export default FrameContainer;
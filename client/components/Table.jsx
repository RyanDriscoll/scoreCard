import React from 'react';
import Frame from './Frame.jsx';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.frames = document.getElementsByClassName('frame');
  }

  componentDidMount() {
    const tl = new TimelineLite();
    tl.staggerFromTo(this.frames, 0.2, {x: 100, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power1.easeOut}, 0.01)
  }

  render() {
    const newTable = [];
    for (let row = 1; row <= 9; row++) {
      for (let col = 1; col <= 9; col++) {
        newTable.push(
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
        newTable
        }
      </div>
    );
  }
}

export default Table;
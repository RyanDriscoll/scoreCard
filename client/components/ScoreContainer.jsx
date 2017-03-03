import React from 'react';
import  FrameContainer  from './FrameContainer.jsx';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';

class ScoreContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="grid">
        <FrameContainer />
      </div>
    )
  }
}

export default ScoreContainer;
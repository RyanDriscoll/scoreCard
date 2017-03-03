import React from 'react';
import Inning from './Inning.jsx';
import  Table  from './Table.jsx';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';

class ScoreContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="grid">
        <Table />
      </div>
    )
  }
}

export default ScoreContainer;
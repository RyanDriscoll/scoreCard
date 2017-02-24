import React from 'react';
import Inning from './Inning.jsx';

class ScoreContainer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="grid">
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
        <Inning className="col-1-9" />
      </div>
    )
  }
}

export default ScoreContainer;
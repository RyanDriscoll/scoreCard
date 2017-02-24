import React from 'react';
import Frame from './Frame.jsx';

class Inning extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const frames = [];
    for (let i = 0; i < 9; i++) {
      frames.push(
        <div
          key={`${i}`}
        >
          <Frame index={i} />
        </div>
      );
    }
    return (
      <div className="inning">
        { frames }
      </div>
    )
  }
}

export default Inning;
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap';

import ScoreContainer from './components/ScoreContainer.jsx';

// function onScoreContainerEnter(){
//   const frames = document.getElementsByClassName('myFrame')
//   console.log('onScoreContainerEnter', frames)

//   const tl = new TimelineLite();
//   tl.staggerFromTo(frames, 0.5, {x: -100, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: Power1.easeOut})
// }

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/'>
        <Route
          path='/card'
          component={ScoreContainer}
          // onEnter={onScoreContainerEnter}
        />
        <IndexRedirect to="/card" />
      </Route>
  </Router>,
  document.getElementById('main')
);

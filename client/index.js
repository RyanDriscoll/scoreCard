import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';

import ScoreContainer from './components/ScoreContainer.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/'>
        <Route
          path='/card'
          component={ScoreContainer}
        />
        <IndexRedirect to="/card" />
      </Route>
  </Router>,
  document.getElementById('main')
);

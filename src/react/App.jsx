//  Library's
import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//  Pages
import Home from './pages/Home';


const App = () =>(
  <div>
    <main>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </main>
  </div>
);


export default App;

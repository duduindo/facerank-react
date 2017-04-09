//  Library's
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//  Includes
import Layout from './Layout';

//  Pages
//  import Home from './pages/Home';
import Preferences from './pages/Preferences';


const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Preferences} />
      <Route path="/preferences" component={Preferences} />
    </Route>
  </Router>
);


export default App;


import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './page/Home';


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}


export default App;

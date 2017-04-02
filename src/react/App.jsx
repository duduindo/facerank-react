//  Library's
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//  Pages
import Home from './pages/Home';


class App extends Component {
  render() {
    return (
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
  }
}


export default App;

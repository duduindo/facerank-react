
//  Library's
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Layout } from 'react-mdl';

//  Includes
import Header from './includes/Header';
import Drawer from './includes/Drawer';

//  Pages
import Home from './page/Home';
import Profile from './page/Profile';
import Preferences from './page/Preferences';


class App extends React.Component {

  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout fixedHeader>
          <Header title="Home head.." />
          <Drawer title="Menu" />
          <main style={{ width: '100vw' }}>
            <Router history={hashHistory}>
              <Route path="/">
                <IndexRoute component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/preferences" component={Preferences} />
              </Route>
            </Router>
          </main>
        </Layout>
      </div>
    );
  }
}


export default App;

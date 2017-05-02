//  Library's
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

//  Includes
import Header from './includes/Header';

//  Pages
import Home from './pages/Home';
import Preferences from './pages/Preferences';


const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path="/" component={Home}/>
        <Route path="/preferences" component={Preferences}/>
      </main>
    </div>
  </Router>
);


export default App;

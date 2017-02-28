
//  Library
import React     from 'react';
import {shallow} from 'enzyme';

//  My scripts
import App from '../../src/react/App.jsx';
import Home from '../../src/react/page/Home.jsx';
import Header from '../../src/react/includes/Header.jsx';
import Drawer from '../../src/react/includes/Drawer.jsx';



test('App', () => {
  const checkbox = shallow(
    <App />
  );
});


test('Home', () => {
  const checkbox = shallow(
    <Home />
  );
});


test('Header', () => {
  const checkbox = shallow(
    <Header title={"Titleee string"} />
  );
});


test('Drawer', () => {
  const checkbox = shallow(
    <Drawer title={"Titleee string"} />
  );
});

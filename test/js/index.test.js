
//  Library
import React     from 'react';
import renderer  from 'react-test-renderer';
import {shallow} from 'enzyme';

//  My scripts
import App from '../../src/react/App';
import Home from '../../src/react/page/Home';
import Header from '../../src/react/includes/Header';
import Drawer from '../../src/react/includes/Drawer';



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


test('Drawer Shallow', () => {
  const drawer = shallow(<Drawer title="Títuloo" />);

  //drawer.find('.opa').simulate('mouseover');
});


test('Drawer Renderer', () => {
  const drawer = renderer.create(<Drawer title="Títuloo" />);

  const tree = drawer.toJSON();
  expect(tree).toMatchSnapshot();
});

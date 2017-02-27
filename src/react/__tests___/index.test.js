
//  Library
import React     from 'react';
import {shallow} from 'enzyme';

//  My scripts
import App      from '../App.jsx';



test('App common', () => {

  const checkbox = shallow(
    <App />
  );

  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});

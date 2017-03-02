
import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import Home from '../../src/react/page/Home';
import Preferences from '../../src/react/page/Preferences';


describe('Home', () => {

  it('Index', () => {
    const component = shallow(<Home />);

    //expect(component).toMatchSnapshot();
  });

})


describe('Preferences', () => {

  it('Index', () => {
    const component = shallow(<Preferences />);

    //expect(component).toMatchSnapshot();
  });

})

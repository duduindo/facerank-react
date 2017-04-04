
import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import Home from '../../src/react/pages/Home';


describe('Home', () => {

  it('Index', () => {
    const component = shallow(<Home />);

    //expect(component).toMatchSnapshot();
  });

})

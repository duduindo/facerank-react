
import React from 'react';
import {shallow} from 'enzyme';


//  My scripts
import Home from '../../src/react/pages/Home';
import Preferences from '../../src/react/pages/Preferences';


describe('Home', () => {

  it('Home', () => {
    const component = shallow(<Home />);

    //expect(component).toMatchSnapshot();
  });

});


describe('Preferences', () => {

  it('Preferences', () => {
    const component = shallow(<Preferences />);

    //expect(component).toMatchSnapshot();
  });

})


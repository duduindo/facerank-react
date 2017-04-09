
import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import Header from '../../src/react/includes/Header';


describe('Header', () => {

  it('Index', () => {
    const component = shallow(<Header />);

    //expect(component).toMatchSnapshot();
  });

})

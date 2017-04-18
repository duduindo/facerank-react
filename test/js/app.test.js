
import React from 'react';
import { Router } from 'react-router';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import App from '../../src/react/App';


describe('Page index - App', () => {

  it('Index', () => {
    const component = shallow(<App />);

    //expect(component).toMatchSnapshot();
  });

})

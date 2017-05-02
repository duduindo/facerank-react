
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';


//  My scripts
import Home from '../../src/react/pages/Home';


describe('Home', () => {

  it('Index', () => {
    const renderer = ReactTestRenderer.create(<Home />);
    console.log(renderer.toJSON());
    //expect(component).toMatchSnapshot();
  });

})

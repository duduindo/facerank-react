
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';


//  My scripts
import Header from '../../src/react/includes/Header';


describe('Header', () => {

  it('Index', () => {
    const renderer = ReactTestRenderer.create(<Header />);

    console.log(renderer.toJSON());
    //expect(component).toMatchSnapshot();
  });

})


import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

//  My scripts
import App from '../../src/react/App';

console.warn(App);

describe('Page index - App', () => {

  it('Index', () => {
    const renderer = ReactTestRenderer.create(<App />);

    //console.log(renderer.toJSON());
    //expect(component).toMatchSnapshot();
  });

})


//  Library
import React     from 'react';
import renderer  from 'react-test-renderer';

//  My scripts
import App      from '../../src/react/App.jsx';


test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />
  );

  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});

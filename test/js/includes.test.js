
import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import Drawer from '../../src/react/includes/Drawer';


describe('Drawer', () => {

  it('Index', () => {
    const component = shallow(<Drawer title={"titleee"} />);

    //expect(component).toMatchSnapshot();
  });

})

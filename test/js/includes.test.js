
import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import BoxLocal         from '../../src/react/includes/Box-local';
import Drawer           from '../../src/react/includes/Drawer';
import Header           from '../../src/react/includes/Header';
import ModalSearchLocal from '../../src/react/includes/Modal-search-local';
import SearchLocal      from '../../src/react/includes/Search-local';




/**
  *
  */
describe('Box', () => {

  it('Local', () => {
    const config = true;
    const component = shallow(<BoxLocal rank={'989464664'} views={'55886644'} local={'Brasil'} typeLocal={'País'} indexLocal={'country'} config={config}  />);

    expect(component).toMatchSnapshot();
  });

})


/**
  *
  */
describe('Drawer', () => {

  it('Index', () => {
    const component = shallow(<Drawer title={"titleee"} />);
  });

})


/**
  *
  */
describe('Header', () => {

  it('Index', () => {
    const component = shallow(<Header title={"titleee"} />);
  });

})


/**
  *
  */
describe('Modals', () => {
  const opening = false;

  it('Modal search local', () => {
    const component = shallow(<ModalSearchLocal open={opening} index={'country'} type={'País'} />);

    expect(component).toMatchSnapshot();
  });

})


describe('Forms', () => {
  const opening = false;

  it('Search local', () => {
    const component = shallow(<SearchLocal className="classe" index={'country'} style={{width: '100%'}} type={'País'} />);

    expect(component).toMatchSnapshot();
  });

})

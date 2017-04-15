
import { observable, observe, autorun, toJS } from 'mobx';
import store from 'store';

/**
 * States
 */

//  Preferences form
const preferences = observable({
  gender: {
    female: false,
    male: false,
  }
});


//  Content app
const allStates = observable({
  preferences
});


/**
 *  Engines
 */
//  Autorun
autorun(() => {
  store.set('allstates', toJS(allStates));
  console.warn(JSON.stringify(toJS(allStates)));
});


/**
 *  Export
 */
export {
  preferences
};

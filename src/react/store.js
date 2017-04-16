
import { action, autorun, computed, observable, toJS } from 'mobx';
import store from 'store';


//  Content app
const UiState = observable({
  preferences: {
    gender: {
      female: true,
      male: false,
    },

    location: [
      {id: 55, type: 'country', rank: 1000101, name: 'Brasil'},
      {id: 498, type: 'state', rank: 85561, name: 'São Paulo'},
      {id: 5223, type: 'county', rank: 1145, name: 'Carapicuíba'},
      {id: 112345, type: 'school', rank: 452, name: 'Elisabeth Silva de Araújo'},
    ],

    get locations() {
      return toJS(this.location);
    },

    setGender: action(function(female, male){
      this.gender.female = female;
      this.gender.male = male;
    })
  }
});


/**
 *  Autorun
 */
autorun(() => {
  store.set('state', toJS(UiState));
  console.warn(JSON.stringify(toJS(UiState)));
});


//  Export
export default UiState;

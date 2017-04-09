
import { observable } from 'mobx';

//  Preferences form
const preferences = observable({
  gender: {
    female: true,
    male: false,

    get values() {
      return [this.female, this.male]
    }
  }
});

export {
  preferences
};

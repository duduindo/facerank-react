
import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Drawer as DrawerMdl, Navigation } from 'react-mdl';


class Drawer extends React.Component {

  constructor(props) {
    super(props);

    //  Bind
    this.addActiveCurrentPage = this.addActiveCurrentPage.bind(this);

    //  State
    this.state = {
      classHome: '',
      classProfile: '',
      classRanking: '',
      classPreferences: '',
      classSettings: '',
    };
  }

  componentDidMount() {
    this.addActiveCurrentPage();
  }

  /**
   * Add class 'active' in link nav in page current
   */
  addActiveCurrentPage() {
    const currentLocal = hashHistory.getCurrentLocation();
    const page = currentLocal.pathname.replace(/\//g, '');

    switch (page) {
      case 'profile':
        this.setState({ classProfile: 'active' });
        break;

      case 'ranking':
        this.setState({ classRanking: 'active' });
        break;

      case 'preferences':
        this.setState({ classPreferences: 'active' });
        break;

      case 'settings':
        this.setState({ classSettings: 'active' });
        break;

      default:
        this.setState({ classHome: 'active' });
        break;
    }
  }

  render() {
    return (
      <DrawerMdl title={this.props.title}>
        <Navigation>
          <Link href="#/"            className={`mdl-navigation__link--${this.state.classHome}`}        >Home</Link>
          <Link href="#/profile"     className={`mdl-navigation__link--${this.state.classProfile}`}     >Perfil</Link>
          <Link href="#/ranking"     className={`mdl-navigation__link--${this.state.classRanking}`}     >Ranking</Link>
          <Link href="#/preferences" className={`mdl-navigation__link--${this.state.classPreferences}`} >Preferências</Link>
          <Link href="#/settings"    className={`mdl-navigation__link--${this.state.classSettings}`}    >Configuraçõess</Link>
        </Navigation>
      </DrawerMdl>
    );
  }
}


Drawer.propTypes = {
  title: React.PropTypes.string,
};

Drawer.defaultProps = {
  title: '',
};


export default Drawer;

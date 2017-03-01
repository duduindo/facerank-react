
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
          <Link className={`mdl-navigation__link--${this.state.classHome}`}        to="/">Home</Link>
          <Link className={`mdl-navigation__link--${this.state.classProfile}`}     to="/profile">Perfil</Link>
          <Link className={`mdl-navigation__link--${this.state.classRanking}`}     to="/ranking">Ranking</Link>
          <Link className={`mdl-navigation__link--${this.state.classPreferences}`} to="/preferences">Preferências</Link>
          <Link className={`mdl-navigation__link--${this.state.classSettings}`}    to="/settings">Configuraçõess</Link>
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

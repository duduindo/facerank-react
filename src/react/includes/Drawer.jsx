
import React from 'react';
import { Link } from 'react-router';
import { Drawer as DrawerMdl, Navigation } from 'react-mdl';


class Drawer extends React.Component {
  render() {
    return (
      <DrawerMdl title={this.props.title}>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/ranking">Ranking</Link>
          <Link to="/preferences">Preferências</Link>
          <Link to="/settings">Configurações</Link>
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

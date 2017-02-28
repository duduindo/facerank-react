
import React from 'react';
import { Header as HeaderMdl, Textfield } from 'react-mdl';

class Header extends React.Component {
  render() {
    return (
      <HeaderMdl title={this.props.title}>
        <Textfield
          value=""
          onChange={() => {}}
          label="Search"
          expandable
          expandableIcon="search"
        />
      </HeaderMdl>
    );
  }
}


Header.propTypes = {
  title: React.PropTypes.string,
};

Header.defaultProps = {
  title: '',
};


export default Header;

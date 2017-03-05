
import React from 'react';
import { Icon } from 'react-mdl';
import ModalSearchLocal from './Modal-search-local';

class BoxLocal extends React.Component {

  openModal() {
    ModalSearchLocal();
  }

  render() {
    return (
      <table className="mdl-table mdl-table--block mdl-table--boxlocal">
        <tbody>
          <tr>
            <td>&ordm;{ this.props.order } <small className="mdl-text__sub-title">de { this.props.views } views</small></td>
            <td className="mdl-text--right">
              <button className="mdl-btn--transparent mdl-btn--no-padding"><Icon name="mode_edit" /></button>
            </td>
          </tr>

          <tr>
            <td colSpan="2" className="mdl-text__sub-title">
              <small>{ this.props.local } - <small className="mdl-text__sub-title">{ this.props.typeLocal }</small></small>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}


BoxLocal.propTypes = {
  order: React.PropTypes.string,
  views: React.PropTypes.string,
  local: React.PropTypes.string,
  typeLocal: React.PropTypes.string,
  auth: React.PropTypes.bool,
};


BoxLocal.defaultProps = {
  title: '',
  order: '',
  views: '',
  local: '',
  typeLocal: '',
  auth: false,
};


export default BoxLocal;

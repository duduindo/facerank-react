
import React            from 'react';
import { Icon }         from 'react-mdl';
import ModalSearchLocal from './Modal-search-local';


/**
 *  Locations of users
 */
class BoxLocal extends React.Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);

    this.state = {
      modal: false,
    };
  }

  openModal() {
    this.setState({
      modal: true,
    });
  }

  render() {
    const config    = this.props.config;
    let btnConfig   = '';
    let modalConfig = '';

    if (config) {
      btnConfig   = <button className="mdl-btn--transparent mdl-btn--no-padding" onClick={this.openModal}><Icon name="mode_edit" /></button>;
      modalConfig = <ModalSearchLocal open={this.state.modal} index={this.props.indexLocal} type={this.props.typeLocal} />;
    }

    return (
      <div>
        {modalConfig}
        <table className="mdl-table mdl-table--block mdl-table--boxlocal">
          <tbody>
            <tr>
              <td>&ordm; { this.props.rank } <small className="mdl-text__sub-title">de { this.props.views } views</small></td>
              <td className="mdl-text--right">
                {btnConfig}
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="mdl-text__sub-title">
                <small>{ this.props.local } - <small className="mdl-text__sub-title">{ this.props.typeLocal }</small></small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

/**
  * @proptype {String}  Number ranking
  * @proptype {String}  Number Views
  * @proptype {String}
  * @proptype {String}
  * @proptype {String}
  * @proptype {Boolean}
  */
BoxLocal.propTypes = {
  rank: React.PropTypes.string.isRequired,
  views: React.PropTypes.string.isRequired,
  local: React.PropTypes.string.isRequired,
  typeLocal: React.PropTypes.string.isRequired,
  indexLocal: React.PropTypes.string.isRequired,
  config: React.PropTypes.bool,
};


BoxLocal.defaultProps = {
  config: false,
};


export default BoxLocal;

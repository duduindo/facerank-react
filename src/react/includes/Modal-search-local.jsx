
import React from 'react';
import { Dialog, DialogContent } from 'react-mdl';
import SearchLocal from './Search-local';


const css = {
  dialogContent: {
    padding: '0 10px',
  },

  title: {
    marginTop: '10px',
  },
};


/**
 *  Modal for search location
 */
class ModalSearchLocal extends React.Component {
  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <DialogContent>
            <h5 style={css.title}>Busque um(a) {this.props.type}</h5>

            <SearchLocal index={this.props.index} type={this.props.type} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}


ModalSearchLocal.propTypes = {
  index: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  open: React.PropTypes.bool,
};


ModalSearchLocal.defaultProps = {
  open: false,
};


export default ModalSearchLocal;

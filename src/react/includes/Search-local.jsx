
import React from 'react';
import { Button, List, ListItem, Textfield } from 'react-mdl';


const css = {
  textfield: {
    width: '100%',
  },

  listItem: {
    padding: '0',
  },
};


/**
 *  Search locations
 */
class SearchLocal extends React.Component {
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <form action="#">
          <input type="hidden" name="indexlocal" value={this.props.index} />
          <Textfield
            onChange={() => { }}
            label={this.props.type}
            floatingLabel
            style={css.textfield}
          />
        </form>

        <div>
          <List>
            <ListItem style={css.listItem}> <Button ripple>São Paulo</Button> </ListItem>
            <ListItem style={css.listItem}> <Button ripple>Rio de Janeiro</Button> </ListItem>
            <ListItem style={css.listItem}> <Button ripple>Rio Grande do Sul</Button> </ListItem>
          </List>
        </div>
      </div>
    );
  }
}


SearchLocal.propTypes = {
  className: React.PropTypes.string,
  index: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,  // eslint-disable-line react/forbid-prop-types
  type: React.PropTypes.string.isRequired,
};


SearchLocal.defaultProps = {
  className: '',
  style: {},
};


export default SearchLocal;

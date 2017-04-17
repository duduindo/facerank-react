
//  Library
import React, { Component, PropTypes } from 'react';
import toObject from 'form-to-object';
import isString from 'lodash/isString';
import { Checkbox, Col, ControlLabel, Form, Grid, FormGroup, Row, Table } from 'react-bootstrap';
import FaEdit from 'react-icons/lib/fa/edit';

//  Scripts
import UiState from '../store';


/**
 *  @prop {{Number}} Ranking
 *  @prop {{String}} Name local
 */
const RowCell = ({ rank, name }) => (
  <tr>
    <td><smal><b>&ordm;</b>{rank}</smal></td>
    <td><div>{name}</div></td>
    <td><FaEdit /></td>
  </tr>
);


class Preferences extends Component {

  static handleChange(e) {
    const form = toObject(e.currentTarget);
    const female = isString(form['preferences[gender][female]']);
    const male = isString(form['preferences[gender][male]']);

    UiState.preferences.setGender(female, male);
  }

  componentDidMount() {
    this.defaultCheckboxs();

    console.log(this.props.locations);
  };

  defaultCheckboxs() {
    this.checkFemale.checked = this.props.female;
    this.checkMale.checked = this.props.male;
  }

  render() {
    return (
      <Form onChange={Preferences.handleChange} >
        <Grid>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>Mostrar:</ControlLabel>
                <Checkbox name="preferences[gender][female]" inputRef={(ref) => { this.checkFemale = ref; }}>Mulheres</Checkbox>
                <Checkbox name="preferences[gender][male]" inputRef={(ref) => { this.checkMale = ref; }}>Homens</Checkbox>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>Sorteio por locais:</ControlLabel>
                <Table>
                  <tbody>
                    {this.props.locations.map(item =>
                      <RowCell key={item.id} rank={item.rank} name={item.name} />,
                    )}
                  </tbody>
                </Table>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Form>
    );
  }
}


Preferences.propTypes = {
  female: PropTypes.bool.isRequired,
  male: PropTypes.booequired,
  locations: PropTypes.array.isRequired,
};

Preferences.defaultProps = {
  female: UiState.preferences.gender.female || false,
  male: UiState.preferences.gender.male || false,
  locations: UiState.preferences.locations,
};

RowCell.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};


export default Preferences;

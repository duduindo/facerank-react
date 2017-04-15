
//  Library
import React, { Component, PropTypes } from 'react';
import toObject from 'form-to-object';
import isString from 'lodash/isString';
import { Button, Checkbox, Col, ControlLabel, Form, Grid, FormGroup, Row } from 'react-bootstrap';

//  Scripts
import { preferences } from '../appState';

class Preferences extends Component {

  componentDidMount() {
    this.defaultCheckboxs();
  }

  defaultCheckboxs() {
    this.checkFemale.checked = this.props.female;
    this.checkMale.checked = this.props.male;
  }

  handleChange(e) {
    const form = toObject(e.currentTarget);
    const female = isString(form['preferences[gender][female]']);
    const male = isString(form['preferences[gender][male]']);

    preferences.gender.female = female;
    preferences.gender.male = male;
  }

  render() {
    return (
      <Form onChange={this.handleChange} >
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
                <Button>Envia</Button>
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
  male: PropTypes.bool.isRequired,
};

Preferences.defaultProps = {
  female: preferences.gender.female || false,
  male: preferences.gender.male || false,
};


export default Preferences;


import React, { Component } from 'react';
import { Button, Checkbox, Col, ControlLabel, Form, Grid, FormGroup, Row } from 'react-bootstrap';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { preferences } from '../appState';


class Preferences extends Component {
  render() {
    return (
      <Form>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>Mostrar:</ControlLabel>
                <Checkbox value="female" name="preferences[gender]">Mulheres</Checkbox>
                <Checkbox value="male" name="preferences[gender]">Homens</Checkbox>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>Sorteio por locais:</ControlLabel>
                <Button onClick={this.click}>Envia</Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Form>
    );
  }
}


export default Preferences;


import React from 'react';
import { Content } from 'react-mdl';
import { Grid, Row, Column } from 'react-cellblock';

class Profile extends React.Component {
  render() {
    return (
      <Content>
        <Grid>
          <Row>
            <Column width="1/2">
              Left!
            </Column>
            <Column width="1/2">
              Right!
            </Column>
          </Row>
        </Grid>
      </Content>
    );
  }
}

export default Profile;

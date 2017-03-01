
import React from 'react';
import { Layout, Content } from 'react-mdl';
import Header from '../includes/Header';
import Drawer from '../includes/Drawer';


class Profile extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout fixedHeader>
          <Header title="Profile head.." />
          <Drawer title="Profile Dra.." />
          <Content />
        </Layout>
      </div>
    );
  }
}

export default Profile;

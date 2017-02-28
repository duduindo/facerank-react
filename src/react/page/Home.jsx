

import React from 'react';
import { Layout, Content } from 'react-mdl';
import Header from '../includes/Header';
import Drawer from '../includes/Drawer';


class Home extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <Layout fixedHeader>
          <Header title="Home head.." />
          <Drawer title="Home Dra.." />
          <Content />
        </Layout>
      </div>
    );
  }
}

export default Home;

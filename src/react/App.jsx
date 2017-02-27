
//  Library
import React from 'react';
import { Layout, Header, Drawer, HeaderRow, Navigation, Content, Textfield } from 'react-mdl';

class App extends React.Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header waterfall>
            <HeaderRow title="Title">
              <Textfield
                value=""
                label="Search"
                expandable
                expandableIcon="search"
              />
            </HeaderRow>
            <HeaderRow>
              <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
              </Navigation>
            </HeaderRow>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    );
  }
}


export default App;


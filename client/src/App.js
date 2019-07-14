import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div style={{height: "100vh"}}></div>
        </Layout>
      </div>
    );
  }
}

export default App;

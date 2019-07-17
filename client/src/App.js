import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Items from './containers/Items/Items';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/:category' component={Items}/>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;

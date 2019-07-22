import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Items from './containers/Items/Items';
import Register from './containers/Auth/Register/Register';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/registracija' component={Register}/>
            <Route path='/:category' render={(props) => (<Items key={props.match.params.category} {...props}/>)}/>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;

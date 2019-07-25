import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Wishlist from './containers/Wishlist/Wishlist';
import Cart from './containers/Cart/Cart';
import Items from './containers/Items/Items';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/registracija' component={Register}/>
            <Route path='/prisijungti' component={Login}/>
            <Route path='/patikusios-prekes' component={Wishlist}/>
            <Route path='/prekiu-krepselis' component={Cart}/>
            <Route path='/:category' render={(props) => (<Items key={props.match.params.category} {...props}/>)}/>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;

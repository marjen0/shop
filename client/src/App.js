import React, { Component } from 'react';
import store from './redux/store';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Cart from './containers/Cart/Cart';
import Items from './containers/Items/Items';
import Order from '././containers/Orders/Order/Order';
import Orders from './containers/Orders/Orders';
import { loadUser } from './redux/actions/auth';
import Login from './containers/Auth/Login/Login';
import Wishlist from './containers/Wishlist/Wishlist';
import Register from './containers/Auth/Register/Register';

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
            <Route path='/:id/uzsakymai/:orderID' component={Order}/>
            <Route path='/:id/uzsakymai' component={Orders}/>
            <Route path='/:category' render={(props) => (<Items key={props.match.params.category} {...props}/>)}/>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;

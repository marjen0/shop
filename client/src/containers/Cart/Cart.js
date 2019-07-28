import React from 'react';
import Item from '../../components/Item/Item';
import { connect } from 'react-redux';
import CartItems from '../../components/CartItems/CartItems';

import classes from './Cart.module.css';

class Cart extends React.Component {
    render() {
        return(
            <div className={classes.Cart}>
               <CartItems items={this.props.cart}/>
               <button>Pirkti</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.items.cart
    }
}

export default connect(mapStateToProps)(Cart);
import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../../components/CartItems/CartItems';
import {order} from '../../redux/actions/orders';
import { authRedirectPath } from '../../redux/actions/auth';
import { returnErrors } from '../../redux/actions/error';

import classes from './Cart.module.css';

class Cart extends React.Component {
    orderHandle = () => {
        if (!this.props.isAuthenticated) {
            const path = this.props.match.path;
            this.props.setError('Pirmiau turite prisijungti');
            this.props.setAuthRedirectPath(path);
            this.props.history.push('/prisijungti');
        } else {
            const items = this.props.cart;
            this.props.order({items});
        }
    }
    render() {
        return(
            <div className={classes.Cart}>
               <CartItems items={this.props.cart}/>
                
               <button onClick={this.orderHandle}>Pirkti</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.items.cart,
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        order: (data) => dispatch(order(data)),
        setAuthRedirectPath: (path) => dispatch(authRedirectPath(path)),
        setError: (message,status,id) => dispatch(returnErrors(message,status,id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
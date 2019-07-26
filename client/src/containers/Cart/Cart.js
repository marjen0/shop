import React from 'react';
import Item from '../../components/Item/Item';
import { connect } from 'react-redux';

import classes from './Cart.module.css';

class Cart extends React.Component {
    render() {
        const items = this.props.cart.map(item => (
            <Item cart={true} key={item._id} item={item}/>
        ));
        return(
            <div className={classes.Wrapper}>
                {items}
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
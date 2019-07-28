import React from 'react';
import CartItem from './CartItem/CartItem';

import classes from './CartItems.module.css';

const cartItems = (props) => {
    let items = null;
    if(!props.items) {
        items = <p>Prekių nėra</p>
        return (items);
    }
    if (props.items) {
        items = props.items.map(item => (
            <CartItem key={item._id} item={item}/>
        ));
    }
    return (
        <React.Fragment>
            <table className={classes.Table}>
                <tr>
                    <th>Prekė</th>
                    <th>Vieneto Kaina</th>
                    <th>Kiekis</th>
                    <th>Iš viso</th>
                </tr>
                {items}
            </table>
        </React.Fragment>
    );
}

export default cartItems;
import React from 'react';
import CartItem from './CartItem/CartItem';

import classes from './CartItems.module.css';

const cartItems = (props) => {
    let items = null;
    let totalPrice = 0;
    if (props.items) {
        items = props.items.map(item => (
            <CartItem key={item._id} item={item}/>
        ));
        props.items.forEach(item => {
            totalPrice += item.totalPrice;
        });
    }
    return (
        <React.Fragment>
            <div style={{overflowX:'auto'}}>
                <table className={classes.Table}>
                    <thead>
                        <tr>
                            <th>Prekė</th>
                            <th>Vieneto Kaina</th>
                            <th>Kiekis</th>
                            <th>Iš viso</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>   
                </table>
            </div>
            
            <hr style={{marginBottom:'1rem'}}/>
            <p className={classes.Price}>Prekių kaina <span>&euro; {totalPrice}</span></p>
        </React.Fragment>
    );
}

export default cartItems;
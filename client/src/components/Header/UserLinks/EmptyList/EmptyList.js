import React from 'react';
import classes from './EmptyList.module.css';

const emptyList = (props) => {
    let message = null;
    if(props.cart && props.cart.length === 0) {
        message = <p className={classes.Message}>Jūsų krepšelyje prekių nėra</p>
    }
    if(props.wishlist && props.wishlist.length === 0) {
        message = <p className={classes.Message}>Jūsų norų sąraše prekių nėra</p>
    }
    return (
        <React.Fragment>
            {message}
        </React.Fragment>
    );
}

export default emptyList;
import React from 'react';
import classes from './Item.module.css';
import itemImage from '../../assets/images/item.png';
import truckIcon from '../../assets/icons/truck.svg';

const item = (props) => {
    return(
        <div className={classes.Item}>
            <img src={itemImage} alt='item'/>
            <p className={classes.Price}><span>&euro;</span> {props.item.price}</p>
            <button className={classes.AddToCart}>Į krepšelį</button>
            <button className={classes.AddToWishlist}>Įtraukti į norų sąrašą</button>
            <p className={classes.InWarehouse}>PREKĖ SANDĖLYJE</p>
            <p>{props.item.title}</p>
        </div>
    );
}

export default item
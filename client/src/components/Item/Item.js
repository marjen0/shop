import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import classes from './Item.module.css';
import itemImage from '../../assets/images/item.png';

class Item extends React.Component {
    addToWishlistHandle = (e,item) => {
        e.preventDefault();
        this.props.addToWishlist(item);
    }
    addToCartHandle = (e,item) => {
        e.preventDefault();
        this.props.addToCart(item);
    }
    render() {
        const {item} = this.props;
        return(
            <div className={classes.Item}>
                <img src={itemImage} alt='item'/>
                <p className={classes.Price}><span>&euro;</span> {item.price}</p>
                <button onClick={(e) => this.addToCartHandle(e,item)} className={classes.AddToCart}>Į krepšelį</button>
                <button onClick={(e) => this.addToWishlistHandle(e,item)} className={classes.AddToWishlist}>Įtraukti į norų sąrašą</button>
                <p className={classes.InWarehouse}>PREKĖ SANDĖLYJE</p>
                <p>{item.title}</p>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToWishlist: (item) => dispatch(actions.addToWishlist(item)),
        addToCart: (item) => dispatch(actions.addToCart(item))
    }
}
export default connect(null,mapDispatchToProps)(Item);
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
    removeFromWishlistHandle = (e,id) => {
        e.preventDefault();
        this.props.removeFromWishlist(id);
    }
    removeFromCartHandle = (e,id) => {
        e.preventDefault();
        this.props.removeFromCart(id);
    }
    render() {
        const {item} = this.props;
        let buttons = null;
        if(!this.props.wishlist && !this.props.cart) {
            buttons = (
                <React.Fragment>
                    <button onClick={(e) => this.addToCartHandle(e,item)} className={classes.AddToCart}>Į krepšelį</button>
                    <button onClick={(e) => this.addToWishlistHandle(e,item)} className={classes.AddToWishlist}>Įtraukti į norų sąrašą</button>
                </React.Fragment>
            );
        } else if(this.props.wishlist){
            buttons = ( 
                <React.Fragment>
                    <button className={classes.Remove} onClick={(e) => this.removeFromWishlistHandle(e,item._id)}>Šalinti</button>
                    <button onClick={(e) => this.addToCartHandle(e,item)} className={classes.AddToCart}>Į krepšelį</button>
                </React.Fragment>
            )
        } else if(this.props.cart){
            buttons = (<button className={classes.Remove} onClick={(e) => this.removeFromCartHandle(e,item._id)}>Šalinti</button>)
        }
        return(
            <div className={classes.Item}>
                <img src={itemImage} alt='item'/>
                <p className={classes.Price}><span>&euro;</span> {item.price}</p>
                {buttons}
                <p className={classes.InWarehouse}>PREKĖ SANDĖLYJE</p>
                <p>{item.title}</p>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToWishlist: (item) => dispatch(actions.addToWishlist(item)),
        addToCart: (item) => dispatch(actions.addToCart(item)),
        removeFromWishlist: (id) => dispatch(actions.removeFromWishlist(id)),
        removeFromCart: (id) => dispatch(actions.removeFromCart(id))
    }
}
export default connect(null,mapDispatchToProps)(Item);
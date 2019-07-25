import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/actions';
import { Link } from 'react-router-dom'
import itemImage from '../../../../assets/images/item.png'
import classes from './ItemSummary.module.css';

class ItemSummary extends React.Component {
    addToCartHandle = (e,item) => {
        e.preventDefault();
        this.props.addToCart(item);
    }
    render() {
        let link = null;
        if (this.props.items.length !== 0) {
            link = (<div className={classes.SeeAll}>
                        <Link to='/patikusios-prekes'>Peržiūrėti visas prekes</Link>
                    </div>)
        }
        let items = this.props.items.map((item, index) =>      
            (
                <div key={item._id+index} className={classes.Item}>
                    <img src={itemImage} alt='item'/>
                    <div className={classes.Properties}>
                        <p>{item.title.substr(0,15)}...</p>
                        <p>{item.price}</p>
                    </div> 
                    <div className={classes.Buttons}>
                        <button onClick={(e,id=item._id) => this.props.remove(e,id)}>Šalinti</button>
                         {this.props.wishlist? <button onClick={(e) => this.addToCartHandle(e,item)}>Į krepšlį</button> : null}
                    </div>
                </div>
            )
        );
        return (
            <React.Fragment>
                {items}
                {link}
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (items) => dispatch(addToCart(items))
    }
}
export default connect(null,mapDispatchToProps)(ItemSummary);
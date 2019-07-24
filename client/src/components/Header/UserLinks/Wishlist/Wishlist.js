import React from 'react';
import { Link } from 'react-router-dom'
import itemImage from '../../../../assets/images/item.png'
import classes from './Wishlist.module.css';

class Wishlist extends React.Component {
    render() {
        let items = this.props.wishlist.map((item, index) => (
            <div key={item._id+index} className={classes.Item}>
                <img src={itemImage} alt='item'/>
                <div className={classes.Properties}>
                    <p>{item.title.substr(0,15)}...</p>
                    <p>{item.price}</p>
                </div> 
                <div className={classes.Buttons}>
                    <button onClick={(e,id=item._id) => this.props.remove(e,id)}>Šalinti</button>
                    <button>Į krepšelį</button>
                </div>
            </div>
        ));
        return (
            <React.Fragment>
                {items}
                <div className={classes.SeeAll}>
                    <Link to='/patikusios-prekes'>Peržiūrėti visas prekes</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Wishlist;
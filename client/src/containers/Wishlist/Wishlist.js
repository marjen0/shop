import React from 'react';
import Item from '../../components/Item/Item';
import { connect } from 'react-redux';

import classes from './Wishlist.module.css';

class Wishlist extends React.Component {
    render() {
        const items = this.props.wishlist.map(item => (
            <Item wishlist={true} key={item._id} item={item}/>
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
        wishlist: state.items.wishlist
    }
}

export default connect(mapStateToProps)(Wishlist);
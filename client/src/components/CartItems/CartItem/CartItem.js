import React from 'react';
import itemImage from '../../../assets/images/item.png';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import classes from './CartItem.module.css';

class CartItem extends React.Component {
    render() {
        let item = <p>Prekių nėra</p>;
        if (this.props.item) {
            item = (
                <tr className={classes.RowData}>
                    <td>
                        {<img className={classes.Image} src={itemImage} alt='item'/>}
                        {this.props.item.title}
                    </td>
                    <td>
                        {this.props.item.price}
                    </td>
                    <td >
                        <input value={this.props.item.amount} onChange={(e) => this.props.itemAmountHandle(this.props.item._id,e.target.value)} defaultValue='1' className={classes.Amount} name='amount' min='1' type='number'/>
                    </td>
                    <td>
                        {this.props.item.totalPrice}
                    </td>
                    <td>
                        <button onClick={() => this.props.removeFromCart(this.props.item._id)}>Šalinti</button>
                    </td>
                </tr>
            );
        }   
        return (
            <React.Fragment>
                {item}
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        itemAmountHandle: (id,value) => dispatch(actions.itemAmountHandle(id,value)),
        removeFromCart: (id) => dispatch(actions.removeFromCart(id))
    }
}
export default connect(null,mapDispatchToProps)(CartItem);
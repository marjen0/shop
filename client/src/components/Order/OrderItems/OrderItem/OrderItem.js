import React from 'react';
import classes from './OrderItem.module.css';
import { Link, withRouter } from 'react-router-dom';

const orderItem = (props) => {
    return (
        <React.Fragment>
            <tr className={classes.RowData}>
                <td>{props.order._id}</td>
                <td>{props.order.date.substr(0,10)}</td>
                <td className={classes.Price}>&euro; {props.order.totalPrice}</td>
                <td><Link to={`${props.match.url}/${props.order._id}`} >Detaliau</Link></td>
            </tr>
        </React.Fragment>
        
    );
}

export default withRouter(orderItem);
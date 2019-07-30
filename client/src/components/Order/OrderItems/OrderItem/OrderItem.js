import React from 'react';
import classes from './OrderItem.module.css';


const orderItem = (props) => {
    return (
        <tr className={classes.RowData}>
            <td>{props.order._id}</td>
            <td>{props.order.date}</td>
            <td>{props.order.totalPrice}</td>
            <td>Detaliau</td>
        </tr>
    );
}

export default orderItem;
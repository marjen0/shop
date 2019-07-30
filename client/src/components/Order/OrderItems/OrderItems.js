import React from 'react';
import OrderItem from './OrderItem/OrderItem';

import classes from './OrderItems.module.css';

const orderItems = (props) => {
    if (!props.orders) {
        return <p>Užsakymų nėra</p>
    }
    const orders = props.orders.map(order => (
        <OrderItem key={order._id} order={order}/>
    )); 
    return (
        <React.Fragment>
            <table className={classes.Table}>
                <thead>
                    <tr>
                        <td>Kodas</td>
                        <td>Data</td>
                        <td className={classes.Price}>Kaina</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {orders}
                </tbody>
            </table>
            
        </React.Fragment>
    );
}

export default orderItems;
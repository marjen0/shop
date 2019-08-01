import React from 'react';
import OrderItem from './OrderItem/OrderItem';

import classes from './OrderItems.module.css';

class OrderItems extends React.Component {
    render() {
        let orders = this.props.orders.map(order => (
            <OrderItem key={order._id} order={order}/>
        )); 
        
        return (
            <React.Fragment>
                <table className={classes.Table}>
                    <thead>
                        <tr>
                            <th>Kodas</th>
                            <th>Data</th>
                            <th>Kaina</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders}
                    </tbody>
                </table>
                
            </React.Fragment>
        );
    }
    
}

export default OrderItems;
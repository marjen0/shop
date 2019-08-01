import React from 'react';
import {connect} from 'react-redux';
import { fetchOrder } from '../../../redux/actions/orders';

import classes from './Order.module.css'

class Order extends React.Component {
    componentDidMount() {
        const orderID = this.props.match.params.orderID;
        this.props.fetchOrder(orderID);
    }
    goBackHandle = () => {
        this.props.history.goBack();
    }
    render() {
        const {order,loading} = this.props;
        let items = null;
        let orderData = <p>Loading...</p>
        if (!loading && order) {
            console.log(order)
            orderData = (
                <div className={classes.Bold}>
                    <p>Data: {order.date.substr(0,10)}</p>
                    <p>Užsakymo kaina: <span className={classes.Price}>&euro; {order.totalPrice}</span></p>
                </div>   
            );
            items = order.items.map(item => (
                <tr className={classes.RowData} key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                </tr>
            ))
        }
        return(
            <React.Fragment>
                <table className={classes.Table}>
                    <thead>
                        <tr>
                            <th>Pavadinimas</th>
                            <th>Kaina</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
               {orderData}
               <button onClick={this.goBackHandle} className={classes.GoBack}>Grįžti</button>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        order: state.order.order,
        message: state.order.message,
        loading: state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (id) => dispatch(fetchOrder(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Order)
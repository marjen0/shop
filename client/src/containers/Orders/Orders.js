import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actions/orders'
import OrderItems from '../../components/Order/OrderItems/OrderItems';

class Orders extends React.Component {
    componentDidMount(){
        if (this.props.user) {
            this.props.fetchOrders(this.props.user._id)    
        }
    }
    render() {
        return(
            <React.Fragment>
                <OrderItems orders={this.props.orders}/>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        user: state.auth.user.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (userID) => dispatch(fetchOrders(userID))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);
import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actions/orders'
import OrderItems from '../../components/Order/OrderItems/OrderItems';

class Orders extends React.Component {
    componentDidMount(){
        const userID = this.props.match.params.id;
        this.props.fetchOrders(userID);
    }
    
    render() {
        const { orders } = this.props;
        return(
            <React.Fragment>
                {orders? <OrderItems orders={this.props.orders}/>: <p>Loading...</p>}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        user: state.auth.user,
        isAuth: state.auth.isAuthenticated,
        isLoading: state.auth.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (userID) => dispatch(fetchOrders(userID))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders);
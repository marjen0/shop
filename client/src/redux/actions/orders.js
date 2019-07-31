import axios from 'axios';
import { tokenConfig } from './auth';
import { ORDER_START,ORDER_SUCCESS,ORDER_FAIL,FETCH_ORDERS_FAIL,
    FETCH_ORDERS_SUCCESS,FETCH_ORDERS_START,FETCH_ORDER,FETCH_ORDER_FAIL,FETCH_ORDER_START } from './actionTypes';
import {clearCart} from './index';

const orderStart = () => {
    return {
        type: ORDER_START
    }
}
const orderFail = (message) => {
    return {
        type: ORDER_FAIL,
        message:message
    }
}
const orderSuccess = (message) => {
    return {
        type: ORDER_SUCCESS,
        message: message
    }
}
export const order = (order) => (dispatch, getState) => {
    dispatch(orderStart());
    axios.post('/api/orders', order,tokenConfig(getState))
    .then(res => {
        dispatch(orderSuccess(res.data.message))
        dispatch(clearCart());
    })
    .catch(err => {
        dispatch(orderFail('Užsakymas nepavyko'));
    })
}
const fetchOrderStart = () => {
    return {
        type: FETCH_ORDERS_START
    }
}
const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
const fetchOrdersFail = (message) => {
    return {
        type:FETCH_ORDERS_FAIL,
        message: message
    }
}
export const fetchOrders = (userID) => (dispatch, getState) => {
    dispatch(fetchOrderStart());
    axios.get(`/api/users/${userID}/orders`, tokenConfig(getState))
    .then(res => {
        dispatch(fetchOrdersSuccess(res.data.orders));
    })
    .catch(err => {
        dispatch(fetchOrdersFail('Nepavyko gauti Užsakymų'));
    })
}
export const fetchOrder = id => (dispatch,getState) => {
    dispatch({
        type: FETCH_ORDER_START
    })
    axios.get(`/api/orders/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: FETCH_ORDER,
            order: res.data.order
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_ORDER_FAIL,
            message: err.response.data
        })
    })
} 
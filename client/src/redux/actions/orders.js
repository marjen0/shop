import axios from 'axios';
import { tokenConfig } from './auth';
import { ORDER_START,ORDER_SUCCESS,ORDER_FAIL } from './actionTypes';
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
import axios from 'axios';
import { ORDER_START,ORDER_SUCCESS,ORDER_FAIL } from './actionTypes';

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
export const order = (data) => dispatch => {
    dispatch(orderStart());
    axios.post('/api/orders', data)
    .then(res => {
        dispatch(orderSuccess('Užsakymas Įvykdytas'))
    })
    .catch(err => {
        dispatch(orderFail('Įvyko klaida'));
    })
}
import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchItemsStart = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START
    }
}
const fetchItemsSuccess = (items) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items: items
    }
}
const fetchItemsFail = (message) => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,
        message: message
    }
}
export const fetchItems = (category) => (dispatch) => {
    dispatch(fetchItemsStart())
    axios.get('/'+category)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        dispatch(fetchItemsFail('Nepavyko rasti prekių'));
    });
}
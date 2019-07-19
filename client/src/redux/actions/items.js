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
    axios.get('/api/items/'+category)
    .then(res => {
        console.log(res.data);
        dispatch(fetchItemsSuccess(res.data.items));
    })
    .catch(err => {
        dispatch(fetchItemsFail('Nepavyko rasti prekių'));
    });
}
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
/**
 * @desc fetches items of specified category
 * @param {category of fetched items} category 
 */
export const fetchItems = (category) => (dispatch) => {
    dispatch(fetchItemsStart())
    axios.get('/api/items/'+category)
    .then(res => {
        dispatch(fetchItemsSuccess(res.data.items));
    })
    .catch(err => {
        dispatch(fetchItemsFail('Nepavyko rasti prekių'));
    });
}
export const fetchAllItems = querystring => dispatch => {
    dispatch(fetchItemsStart());
    axios.get('/api/items'+querystring)
    .then(res => {
        dispatch(fetchItemsSuccess(res.data.items));
    })
    .catch(err => {
        dispatch(fetchItemsFail('Nepavyko rasti prekių'));
    })
}
/**
 * 
 * @param {item to add to wishlist (localstorage and redux state)} item 
 */
export const addToWishlist = (item) => {
    return {
        type: actionTypes.ADD_TO_WISHLIST,
        item: item
    }
}
/**
 * 
 * @param {id of item to be removed} id 
 */
export const removeFromWishlist = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_WISHLIST,
        id:id
    }
}
/**
 * 
 * @param {item to add to cart (localstorage and redux state)} item 
 */
export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        item: item
    }
}
/**
 * 
 * @param {id of item to be removed} id 
 */
export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id:id
    }
}
export const itemAmountHandle = (id, value) => {
    return {
        type: actionTypes.CHANGE_ITEM_AMOUNT,
        payload: {
            id:id,
            value:value
        }
    }
}
export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}


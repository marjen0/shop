import * as actionTypes from '../actions/actionTypes';
import { stat } from 'fs';

const initialState = {
    items: [],
    wishlist: localStorage.getItem('wishlist')? [...JSON.parse(localStorage.getItem('wishlist'))] : [],
    isLoading:false,
    error: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS_START:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.items
            }
        case actionTypes.FETCH_ITEMS_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.message
            }
        case actionTypes.ADD_TO_WISHLIST:
            const newWishlist = [...state.wishlist];
            newWishlist.push(action.item);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
            
            return {
                ...state,
                wishlist: newWishlist
            }
        case actionTypes.REMOVE_FROM_WISHLIST:
            const updatedWishlist = [...state.wishlist].filter(item => item._id !== action.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return {
                ...state,
                wishlist: updatedWishlist
            }
        default:
            return state;
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    wishlist: localStorage.getItem('wishlist')? [...JSON.parse(localStorage.getItem('wishlist'))] : [],
    cart: localStorage.getItem('cart')? [...JSON.parse(localStorage.getItem('cart'))] : [],
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
        case actionTypes.ADD_TO_CART:
            const newCart = [...state.cart];
            newCart.push(action.item);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart
            }
        case actionTypes.REMOVE_FROM_CART:
            const updatedcart = [...state.cart].filter(item => item._id !== action.id);
            localStorage.setItem('cart', JSON.stringify(updatedcart));
            return {
                ...state,
                cart: updatedcart
            }
        default:
            return state;
    }
}

export default reducer;
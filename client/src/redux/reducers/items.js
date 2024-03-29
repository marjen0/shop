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
            action.item.amount = 1;
            action.item.totalPrice=action.item.amount*action.item.price;
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
        case actionTypes.CHANGE_ITEM_AMOUNT:
            const index = state.cart.findIndex(x => x._id === action.payload.id);
            const item = JSON.parse(localStorage.getItem('cart'))[index];
            item.amount = action.payload.value;
            item.totalPrice = action.payload.value*item.price;
            const updItems = [...state.cart];
            updItems[index] = item;
            localStorage.setItem('cart',JSON.stringify(updItems));
            return {
                ...state,
                cart: updItems
            }
        case actionTypes.CLEAR_CART:
            localStorage.removeItem('cart');
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default reducer;
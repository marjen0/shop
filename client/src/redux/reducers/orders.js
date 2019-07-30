import { ORDER_START,ORDER_FAIL,ORDER_SUCCESS,FETCH_ORDERS_START,FETCH_ORDERS_SUCCESS,FETCH_ORDERS_FAIL } from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: null,
    purchased: false,
    message: null
}
const reducer = (state=initialState,action) => {
    switch (action.type) {
        case ORDER_START:
            return {
                ...state,
                loading:true
            }
        case ORDER_SUCCESS: 
            return {
                ...state,
                loading:false,
                purchased:true,
                message: action.message
            }
        case ORDER_FAIL: {
            return {
                ...state,
                purchased:false,
                loading:false,
                message: action.message
            }
        }
        case FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case FETCH_ORDERS_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;
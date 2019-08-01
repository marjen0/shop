import { ORDER_START,ORDER_FAIL,ORDER_SUCCESS,FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,FETCH_ORDERS_FAIL,FETCH_ORDER,FETCH_ORDER_FAIL,FETCH_ORDER_START } from '../actions/actionTypes';

const initialState = {
    orders: null,
    order: null,
    loading: false,
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
                ...state,
                loading: false
            }
        case FETCH_ORDER_START: 
            return {
                ...state,
                loading:true,
                message: null
            }
        case FETCH_ORDER:
            return {
                ...state,
                order: action.order,
                loading: false
            }
        case FETCH_ORDER_FAIL: 
            return {
                ...state,
                loading:false,
                message: action.message
            }
        
        default:
            return state
    }
}

export default reducer;
import { ORDER_START,ORDER_FAIL,ORDER_SUCCESS } from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: null,
    purchased: false,
    message: null
}
const reducer = (state=initialState,action) => {
    switch (key) {
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
        default:
            break;
    }
}

export default reducer;
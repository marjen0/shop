import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
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
        default:
            return state;
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    isLoading:false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
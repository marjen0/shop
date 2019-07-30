import { combineReducers } from 'redux';
import itemsReducer from './items';
import authReducer from './auth';
import errorReducer from './error';
import orderReducer from './orders';

const rootReducer = combineReducers({
    items: itemsReducer,
    auth:authReducer,
    error:errorReducer,
    order: orderReducer
});

export default rootReducer;
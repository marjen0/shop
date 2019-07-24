import { combineReducers } from 'redux';
import itemsReducer from './items';
import authReducer from './auth';
import errorReducer from './error';

const rootReducer = combineReducers({
    items: itemsReducer,
    auth:authReducer,
    error:errorReducer
});

export default rootReducer;
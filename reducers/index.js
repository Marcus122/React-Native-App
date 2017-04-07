import { combineReducers } from 'redux';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
    auth:authReducer
});

module.exports = rootReducer;
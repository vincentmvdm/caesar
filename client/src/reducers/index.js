import { combineReducers } from 'redux';
import meReducer from './meReducer';

const rootReducer = combineReducers({
    me: meReducer
});

export default rootReducer;

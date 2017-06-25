import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meReducer from './meReducer';
import topTracksReducer from './topTracksReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
    topTracks: topTracksReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meReducer from './meReducer';
import topTracksReducer from './topTracksReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
    topTracks: topTracksReducer,
    form: formReducer
});

export default rootReducer;

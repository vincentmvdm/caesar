import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meReducer from './meReducer';
import topTracksReducer from './topTracksReducer';
import groupsReducer from './groupsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
    topTracks: topTracksReducer,
    myGroups: groupsReducer,
    form: formReducer
});

export default rootReducer;

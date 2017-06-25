import { FETCH_GROUPS } from '../actions';

export default function(state = {}, action) {
    if (action.type === FETCH_GROUPS) {
        return action.payload.data.groups;
    }
    return state;
};

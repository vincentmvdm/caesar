import { SAVE_AUTH } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case SAVE_AUTH:
            return action.payload;
        default:
            return state;
    }
}

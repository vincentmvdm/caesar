import { SAVE_AUTH } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case SAVE_AUTH:
            return action.payload;
        default:
            return state;
    }
}

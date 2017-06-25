import { FETCH_TEST } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TEST:
            return action.payload.data["items"];
        default:
            return state;
    }
}

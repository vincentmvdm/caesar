import { FETCH_TOP_TRACKS } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TOP_TRACKS:
            return action.payload.data["items"];
        default:
            return state;
    }
}

import { FETCH_TEST } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TEST:
            console.log(action.payload.data);
        default:
            return state;
    }
}

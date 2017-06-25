import axios from 'axios';

export const FETCH_ME = "fetch_me";

const ROOT_URL = 'https://api.spotify.com/v1';

export function fetchMe(access_token) {
    const options = {
        'method': 'get',
        'url': `${ROOT_URL}/me`,
        'headers': {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': "application/json"
        }
    };

    const request = axios(options);

    return {
        type: FETCH_ME,
        payload: request
    };
}

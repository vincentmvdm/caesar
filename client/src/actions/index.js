import axios from 'axios';

export const FETCH_TEST = "fetch_test";

const ROOT_URL = 'https://api.spotify.com/v1';

export function fetchTest(access_token, refresh_token) {
    const request = axios.get(`${ROOT_URL}/me/playlists`, {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    });

    return {
        type: FETCH_TEST,
        payload: request
    };
}

import axios from 'axios';

export const FETCH_TEST = "fetch_test";

const ROOT_URL = 'https://api.spotify.com/v1/users/1154188194/playlists';

export function fetchTest(access_token, refresh_token) {
    const options = {
        'method': 'post',
        'url': 'https://api.spotify.com/v1/users/1154188194/playlists',
        'headers': {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': "application/json"
        },
        'data': {
            'description': 'New playlist descriptionss',
            'public': false,
            'name': 'Names'
        }
    };

    console.log(options);

    const request = axios(options);

    return {
        type: FETCH_TEST,
        payload: request
    };
}

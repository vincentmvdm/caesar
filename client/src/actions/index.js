import axios from 'axios';

export const SAVE_AUTH = "save_auth";
export const FETCH_ME = "fetch_me";
export const FETCH_TOP_TRACKS = "fetch_top_tracks";
export const CREATE_GROUP = "create_group";
export const JOIN_GROUP = "join_group";
export const FETCH_GROUPS = 'fetch_groups';

const ROOT_URL = 'https://api.spotify.com/v1';

export function saveAuth(access_token, refresh_token) {
    return {
        type: SAVE_AUTH,
        payload: {
            access_token,
            refresh_token
        }
    };
}

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

export function fetchGroups(access_token) {
    const options = {
        'method': 'post',
        'url': 'localhost:8888/me',
        'body': {
            access_token,
        },
        'headers': {
            'Content-Type': "application/json"
        }
    };

    const request = axios(options);

    return {
        type: FETCH_GROUPS,
        payload: request
    };
}

export function fetchTopTracks(access_token) {
    const options = {
        'method': 'get',
        'url': `${ROOT_URL}/me/top/tracks`,
        'headers': {
            'Authorization': 'Bearer ' + access_token
        }
    };

    const request = axios(options);

    return {
        type: FETCH_TOP_TRACKS,
        payload: request
    };
}

export function createGroup(values, callback) {
    callback();
    console.log(values);

    return {
        type: CREATE_GROUP,
        payload: values
    }
}

export function joinGroup(values, callback) {
    callback();
    console.log(values);

    return {
        type: JOIN_GROUP,
        payload: values
    }
}

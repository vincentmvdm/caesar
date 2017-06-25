const axios = require('axios');
const express = require('express'); // Express web server framework
const request = require('request-promise'); // "Request" library
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const scopes='playlist-modify-public playlist-modify-private user-read-private user-read-email';

const client_id = '524b1bd0390740f3802408f733ecc338'; // Your client id
const client_secret = 'b8b03bdcf7764b05bb57862de7b1b7b3'; // Your secret
const redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
const frontendHost = 'http://localhost:3000';

const app = express();

const ephemeral = {
  groups: [],
  users: [],
};

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  let access_token;
  let refresh_token;
  let uid;

  request.post({
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true,
  })
  .then((body) => {
    access_token = body.access_token;
    refresh_token = body.refresh_token;

    // use the access token to access the Spotify Web API
    return request.get({
      url: 'https://api.spotify.com/v1/me',
      headers: { 'Authorization': 'Bearer ' + access_token },
      json: true,
    });
  })
  .then((body) => {
    uid = body.id;
    return request.get({
      url: 'https://api.spotify.com/v1/me/top/tracks',
      headers: { 'Authorization': 'Bearer ' + access_token },
      json: true,
    });
  })
  .then((body) => {
    // update user's stored top tracks
    let userIndex = ephemeral.users.findIndex(u => (u.uid === uid));
    if (userIndex === -1) {
      // new user
      ephemeral.users.push({
        uid,
        top: body.items,
      });
      userIndex = ephemeral.users.length - 1;
    } else {
      ephemeral.users[userIndex].top = body.items;
    }

    console.log(ephemeral);
      
    // pass the token to the browser to make requests from there
    res.redirect(frontendHost + '/groups#' + querystring.stringify({
      access_token,
      refresh_token,
    }));
  })
  .catch((error) => {
    console.error(error);
    res.redirect(frontendHost + '/error#' + querystring({
      message: error.message,
    }));
  });
});

console.log('Listening on 8888');
app.listen(8888);

const axios = require('axios');
const express = require('express'); // Express web server framework
const bodyParser = require('body-parser');
const request = require('request-promise'); // "Request" library
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const scopes='playlist-modify-public playlist-modify-private user-read-private user-read-email';

const client_id = '524b1bd0390740f3802408f733ecc338'; // Your client id
const client_secret = 'b8b03bdcf7764b05bb57862de7b1b7b3'; // Your secret
const redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
const frontendHost = 'http://localhost:3000';

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const ephemeral = {
  groups: {},
  users: {},
};

const randomStr = n =>
  Array(N + 1).join((Math.random().toString(36) + '00000000000000000').slice(2, 18)).slice(0, n);

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
    if (ephemeral.users[uid]) {
      // existing user
      ephemeral.users[uid].top = body.items;
    } else {
      // new user
      ephemeral.users[uid] = {
        uid,
        top: body.items,
        groups: [],
      };
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

app.post('/groups', (req, res) => {
  const access_token = req.body.access_token;
  // get the uid
  request.get({
    url: 'https://api.spotify.com/v1/me',
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true,
  })
  .then((body) => {
    const uid = body.id;
    res.send({
      groups: ephemeral.users[uid].groups,
    });
  })
  .catch((error) => {
    res.send({
      error: true,
      message: error.message,
    });
  });
});

app.post('/groups/new', (req, res) => {
  const access_token = req.data.access_token;
  // get the uid
  request.get({
    url: 'https://api.spotify/v1/me',
    headers: { 'Authorization': 'Bearer ' + access_token },
    json: true,
  })
  .then((body) => {
    const uid = body.id;
    const code = randomStr(4).toUpperCase();

    ephemeral.users[uid].groups.push(code);
    ephemeral.groups[code] = {
      playlist: null,
      people: [uid],
    };

    res.send({ code });
  })
  .catch((error) => {
    res.redirect(frontendHost + '/error#' + querystring.stringify({
      message: error.message,
    }));
  });
});

console.log('Listening on 8888');
app.listen(8888);

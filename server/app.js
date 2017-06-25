var axios = require('axios');
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var scopes='user-read-private user-read-email';

var client_id = '524b1bd0390740f3802408f733ecc338'; // Your client id
var client_secret = 'b8b03bdcf7764b05bb57862de7b1b7b3'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
var frontendHost = 'http://localhost:3000';

var app = express();

app.get('/callback', function(req, res) {
  var code = req.query.code || null;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
          refresh_token = body.refresh_token;

      var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect(frontendHost + '/groups#' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }));
    } else {
      res.redirect('/error#' +
        querystring.stringify({
          error: `invalid_token: ${response.statusCode}`,
        }));
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);

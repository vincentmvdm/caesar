    var ml = require('./kmeans.js');
      var axios = require('axios');
      var request = require('request-promise');

function getClusterSongs(json1,json2,access_token){
  
       var resultIDs = unionIDJSON(json1, json2);
       //console.log(resultIDs);
       return getTracksLabels(resultIDs, access_token);
  }
        // needs array of spotify tracks ids
        // returns a json object of the tracks labels
        function getTracksLabels(IDArray, access_token){
          
          stringArray = IDArray.join(",");
          return request.get({
            url: 'https://api.spotify.com/v1/audio-features'+'?ids=' + stringArray,
            headers: {'Authorization' : 'Bearer ' + access_token} ,
            json: true
          }).then(function(body){
            var dictLabls = formatLabels(body);
            var res = ml.setup(dictLabls);
            console.log(res);
            return res;
          }).catch(function(error){
            console.log(error);
          })

          }
        // returns a map of track ID's to an array of the labels values (in order of appearance)
        function formatLabels(json){
          trackLabels = json.audio_features;
          var dict = [];


          for(i = 0; i < trackLabels.length; i++){
            var track =trackLabels[i];
            dict.push({
              key: trackLabels[i].uri ,
              value: [track.acousticness , track.danceability, track.energy, track.loudness, track.speechiness, track.tempo, track.valence]
            })
          }

          return dict;

        }

        function unionIDJSON(json1,json2){
           var resultID = json1.map(function(a) {return a.id;});
          var result2ID = json2.map(function(a) {return a.id;});

          var IDunion = resultID.concat(result2ID.filter(function (item) {
              return resultID.indexOf(item) < 0;
          }));

          return IDunion;
        }

module.exports = {
  getClusterSongs,
}
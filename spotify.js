var keys = require('./keys');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: keys.spotifyKeys.access_token_key,
  secret: keys.spotifyKeys.access_token_secret
});

function displayArtist (artist) {
  return artist.name
}

function displayTrack (track) {
  return 'Title: ' + track.name + '\nArtists: ' + track.artists.map(displayArtist).join(', ')
}

module.exports = function (song) {
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var tracks = data.tracks.items.map(displayTrack);
    console.log(tracks.join('\n\n'));
  });
}

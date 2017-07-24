var keys = require('./keys');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotifyKeys.access_token_key,
    secret: keys.spotifyKeys.access_token_secret
});

function displayArtist(artist) {
    return artist.name
}

function displayAlbum(album) {
    return album.name
}

function displayURL(external_url) {
    return external_url
}

function displayTrack(track) {
    return 'Title: ' + track.name + '\nArtists: ' + track.artists + '\nAlbum: ' + track.album.map(displayArtist, displayAlbum).join(', ')
}

function

module.exports = function(song) {
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var tracks = data.tracks.items.map(displayTrack, );
        console.log(tracks.join('\n\n'));
    });
}
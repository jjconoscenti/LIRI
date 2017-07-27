var fs = require('fs');
var keys = require('./keys');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotifyKeys.access_token_key,
    secret: keys.spotifyKeys.access_token_secret
});

module.exports = function doThing() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        var dataArray = data.split(",");
        randomSongName = dataArray[1];
        spotify.search({ type: 'track', query: `${randomSongName}` }, function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
            }
            console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song Name: ${data.tracks.items[0].name}`);
            console.log(`Album: ${data.tracks.items[0].album.name}`);
            console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
        });
    });
}
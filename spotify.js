var keys = require('./keys');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotifyKeys.access_token_key,
    secret: keys.spotifyKeys.access_token_secret
});



// function displayArtist(artist) {
//     return artist.name
// }

// function displayTrack(track) {
//     return 'Title: ' + track.name + '\nArtists: ' + track.artists.map(displayArtist).join(', ')
// }

// module.exports = function(song) {
//     spotify.search({ type: 'track', query: song }, function(err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }

//         var tracks = data.tracks.items.map(displayTrack);
//         console.log(tracks.join('\n\n'));
//     });
// }

module.exports = function(songName) {

    var song = songName;

    spotify.search({ type: 'track', query: `${song}` }, function(err, data) {
        if (err) {
            return console.log("Error: " + err);
        }
        //console song info
        console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
        console.log(`Song Name: ${data.tracks.items[0].name}`);
        console.log(`Album: ${data.tracks.items[0].album.name}`);
        console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
        //console.log(data);
    })
}
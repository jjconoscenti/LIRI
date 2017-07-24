// Grab data from keys.js

var fs = require('fs');
var spotifySong = require('./spotify');
var showTweets = require('./showTweets');
var omdbData = require('./obdb');


// stored argument's array
var nodeArgv = process.argv;
var command = process.argv[2];

// movie or song
var x = "";

//attach multiple word arguments
for (var i = 3; i < nodeArgv.length; i++) {
    if (i > 3 && i < nodeArgv.length) {
        x = x + "+" + nodeArgv.length[i];
    } else {
        x = x + nodeArgv[i];
    }
}

function doThing() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        var dataArray = data.split(",");
        randomSongName = dataArray[1];
        spotify.search({ type: 'track', query: '${randomSongName}' }, function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
            }
            console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
            console.log(`Song Name: ${data.tracks.items[0].name}`);
            console.log(`Album: ${data.tracks.items[0].album.name}`);
            console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
        })
    })
}

//switch cases
switch (command) {
    case "my-tweets":
        showTweets();
        break;

    case "spotify-this-song":
        if (x) {
            console.log(x);
            spotifycommand(x);
        } else {
            spotifycommand("Through the Wire");
        }
        break;

    case "movie-this":
        if (x) {
            omdb(x)
        } else {
            omdb("Fight Club")
        }
        break;

    case "do-what-it-says":
        doThing();
        break;

    default:
        console.log("--------------------------------------------");
        console.log("Please enter one of the following commands: ");
        console.log("my-tweets -- displays the last 20 tweets from @jjconoscenti");
        console.log("spotify-this-song -- provides preview link to a song on Spotify");
        console.log("movie-this -- displays basic info from IMDB for a movie");
        console.log("do-what-it-says -- performs a task. If not available it will search for a song of that name in Spotify");
}
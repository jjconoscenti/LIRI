// Grab data from keys.js

var fs = require('fs');
var spotify = require('./spotify');
var showTweets = require('./showTweets');
var omdb = require('./omdb');
var doThing = require('./doThing')
    // stored argument's array
var nodeArgv = process.argv;
var command = process.argv[2];

// for doThing function
var randomSongName;

// movie or song
var x = "";

var writeToLog = function(data) {
    fs.appendFile("log.txt", '\r\n\r\n');
    fs.appendFile("log.txt", JSON.stringify(data), function(err) {
        if (err) {
            return console.log("Error occurred" + err);
        }
        console.log("log.txt was updated!!!");
    });
}

//attach multiple word arguments
for (var i = 3; i < nodeArgv.length; i++) {
    if (i > 3 && i < nodeArgv.length) {
        x = x + "+" + nodeArgv.length[i];
    } else {
        x = x + nodeArgv[i];
    }
}

//switch cases
switch (command) {
    case "my-tweets":
        showTweets();
        break;

    case "spotify-this-song":
        if (x) {
            console.log(x);
            spotify(x);
        } else {
            spotify("Through the Wire");
        }
        break;

    case "movie-this":
        if (x) {
            omdb(x);
            console.log(x);
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
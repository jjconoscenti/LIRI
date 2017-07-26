var keys = require('./keys');
var request = require('request');

module.exports = function(movie) {
    var movie = process.argv[3];
    request(`http://www.omdbapi.com/?apikey=40e9cece&t=${movie}`, function(error, response, body) {
        if (error) {
            console.log("error:", error);
        } else {
            console.log(`Title: ${JSON.parse(body).Title}`);
            console.log(`Year: ${JSON.parse(body).Year}`);
            console.log(`IMDB Rating: ${JSON.parse(body).Ratings[0].Value}`);
            console.log(`Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`);
            console.log(`Country: ${JSON.parse(body).Country}`);
            console.log(`Language(s): ${JSON.parse(body).Language}`);
            console.log(`Plot: ${JSON.parse(body).Plot}`);
            console.log(`Actors: ${JSON.parse(body).Actors}`);
        }
    });
};
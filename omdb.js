var keys = require('./keys');

module.exports = function() {

    if (command === "movie-this") {
        var movie = process.argv[3];
        request(`http://www.omdbapi.com/?apikey=40e9cece&t=${movie}`, function(error, response, body) {
            if (error) {
                console.log("error:", error); // Print the error if one occurred
            } else {
                // console.log(JSON.parse(body));
                console.log(`Title: ${JSON.parse(body).Title}`); //movie title
                console.log(`Year: ${JSON.parse(body).Year}`); //movie year
                console.log(`IMDB Rating: ${JSON.parse(body).Ratings[0].Value}`); //IMDB Rating
                console.log(
                    `Rotten Tomatoes Rating: ${JSON.parse(body).Ratings[1].Value}`
                ); //Rotten tomatoes rating
                console.log(`Country: ${JSON.parse(body).Country}`); //Country
                console.log(`Language(s): ${JSON.parse(body).Language}`); //Language
                console.log(`Plot: ${JSON.parse(body).Plot}`); //Plot
                console.log(`Actors: ${JSON.parse(body).Actors}`); //Actors
            }
        });
    }
}
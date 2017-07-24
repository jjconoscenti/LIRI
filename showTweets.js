var keys = require('./keys');
var twitter = require('twitter');
var client = new twitter(keys.twitterKeys);

module.exports = function() {
    var params = {
        screen_name: "jjconoscenti"
    };
    console.log('Recent Tweets from @jjconoscenti');
    console.log("------------------------------------------");
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            var recentTweets = tweets.map(function(tweet) {
                return tweet.text;
            }).slice(0, 20).join('\n\n');
            console.log(recentTweets);
        }
        console.log(error);
    });
}
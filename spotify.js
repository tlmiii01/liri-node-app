var Spotify = require('node-spotify-api');

// Code to create the Spotify environment variables
var dotenv = require("dotenv").config();
if (dotenv.error) {
    throw dotenv.error
}

// Importing the keys for Spotify
var keys = require("./keys.js");
// console.log(keys.spotify);



function processSpotify(title) {
    // let title = process.argv[3];
    // console.log(title);

    var spotify = new Spotify(keys.spotify);

    // spotify.search({ type: 'track', query: title }, function (err, data) {
    //     if (err) {
    //         return console.log('Error occurred: ' + err);
    //     }
    //     var items = data.tracks.items;
    //     // for (let i = 0; i < items.length; ++i) {
    //     //     console.log(items[i].name);
    //     // }

    //     for (let item of items) {
    //         console.log(item.name);
    //     }
    // });

    title = title.replace(/ /g, "%20");
    console.log(title);

    var queryUrl = "https://api.spotify.com/v1/search?type=track&limit=10&q=" + title;

    spotify
        // .search({ type: "track", query: title })
        .request(queryUrl)
        .then((response) => {
            console.log(response.tracks.items);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = processSpotify;
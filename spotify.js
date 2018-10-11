var Spotify = require('node-spotify-api');

// Code to create the Spotify environment variables
var dotenv = require("dotenv").config();
if (dotenv.error) {
    throw dotenv.error
}

// Importing the keys for Spotify
var keys = require("./keys.js");
// console.log(keys.spotify);

// List of possible matches
var songMatches = [];

function processSpotify(title) {

    var spotify = new Spotify(keys.spotify);

    title = title.replace(/ /g, "%20");
    console.log(title);

    var queryUrl = "https://api.spotify.com/v1/search?type=track&limit=20&q=" + title;

    spotify

        .request(queryUrl)
        .then((response) => {

            var count = 0;
            var items = response.tracks.items;
            // console.log(items.items);
            // console.log(items.items);
            for (match in items) {
                count++;
                var song = {
                    title: items[match].name,
                    artistName: items[match].artists[0].name,
                    artistID: items[match].artists[0].id,
                    albumName: items[match].album.name,
                    previewUrl: items[match].preview_url
                };

                songMatches.push(song);
            }
            console.log(songMatches.length);
            console.log(songMatches);

            // console.log(response.tracks.items[9]);

            // var song = {artistName: response.tracks.items[6].artists[0].name,
            //             artistID: response.tracks.items[6].artists[0].id,
            //             albumName: response.tracks.items[6].artists[0].name,
            //             previewUrl: response.tracks.items[6].preview_url};

            // console.log(song);
            // console.log(response.tracks.items[0].artists[0].name);
            // console.log(response.tracks.items[0].artists[0].id);
            // console.log(response.tracks.items[0].album.name);
            // console.log(response.tracks.items[0].preview_url);

            // console.log(response.tracks.items[0]);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = processSpotify;
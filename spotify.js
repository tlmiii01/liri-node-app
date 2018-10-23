var Spotify = require('node-spotify-api');

// Code to create the Spotify environment variables
var dotenv = require("dotenv").config();
if (dotenv.error) {
    throw dotenv.error
}

// Importing the keys for Spotify
var keys = require("./keys.js");

// List of possible matches
var songMatches = [];
var bestMatch = "";

var divider = "***************************************************************************\n";

// Function to determine the closest match
function findBestMatch() {
    bestMatch = songMatches[0];
    for (let i = 1; i < songMatches.length; ++i) {
        if ( songMatches[i].popularity > bestMatch.popularity ) {
            bestMatch = songMatches[i];
        }
    }
}

function printBestMatch() {
    console.log(divider);
    console.log("Information on the song:");
    console.log("Song Name: " + bestMatch.title);
    console.log("Artist: " + bestMatch.artistName);
    console.log("Album Name: " + bestMatch.albumName);
    if (bestMatch.previewUrl === null) {
        console.log("No Preview URL is available..");
    } else {
        console.log("Preview URL: " + bestMatch.previewUrl);
    }
    console.log("\n");
    console.log(divider);
}

function processSpotify(title) {
    var spotify = new Spotify(keys.spotify);

    // Keeping a fresh version of the title for searching
    var originalTitle = title.toLowerCase().replace(/\+/g, " ");
    
    title = title.replace(/ /g, "%20");
    
    var queryUrl = "https://api.spotify.com/v1/search?type=track&limit=20&q=" + title;
    spotify

        .request(queryUrl)
        .then((response) => {

            var count = 0;
            var items = response.tracks.items;
                        
            for (match in items) {
                if (items[match].name.toLowerCase() === originalTitle ) {
                    
                    count++;
                    var song = {
                        title: items[match].name,
                        artistName: items[match].artists[0].name,
                        artistID: items[match].artists[0].id,
                        albumName: items[match].album.name,
                        previewUrl: items[match].preview_url,
                        popularity: parseInt(items[match].popularity)
                    };
    
                    songMatches.push(song);
                    
                }
            }

            if (songMatches != "") {
                findBestMatch();
                printBestMatch();
                
            } else {
                console.log("We could not find any matches...");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = processSpotify;
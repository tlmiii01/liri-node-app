// Code to create the Spotify environment variables
var dotenv = require("dotenv").config();
if (dotenv.error) {
    throw dotenv.error
}

// Importing the keys for Spotify
var keys = require("./keys.js");
console.log(keys.spotify);

var bandVenues = require("./band.js");

// Switch statement to arse the arguments
switch (process.argv[2]) {
    case "concert-this":
        bandVenues();
        break;
    case "spotify-this-song":
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
    default:
        break;
}



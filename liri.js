var bandVenues = require("./band.js");
var spotifySongData = require("./spotify.js");
var movieData = require("./omdb.js");

// Switch statement to arse the arguments
switch (process.argv[2]) {
    case "concert-this":
        bandVenues();
        break;
    case "spotify-this-song":
        spotifySongData();
        break;
    case "movie-this":
        movieData();
        break;
    case "do-what-it-says":
        break;
    default:
        console.log("Unsupported command!");
        break;
}



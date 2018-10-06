var bandVenues = require("./band.js");
var spotifySongData = require("./spotify.js");

// Switch statement to arse the arguments
switch (process.argv[2]) {
    case "concert-this":
        bandVenues();
        break;
    case "spotify-this-song":
        spotifySongData();
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
    default:
        break;
}



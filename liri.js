var fs = require("fs");
var bandVenues = require("./band.js");
var spotifySongData = require("./spotify.js");
var movieData = require("./omdb.js");

// Capture the data from the arguments array
var command = process.argv[2];
var term = process.argv.slice(3).join("+");


function processFile() {
   fs.readFile("./random.txt", "utf8", (err, data) => {
       if (err) {
           throw err
       } else {
           let dataArr = data.split(",");
           command = dataArr[0];
           term = dataArr[1].replace(/\"/g, "");
           processCommand(command, term)
           return;
       }
   }); 
}
// Function to process the command
function processCommand(command, term) {
    // Switch statement to arse the arguments
    switch (command) {
        case "concert-this":
            bandVenues(term);
            break;
        case "spotify-this-song":
            if(term === ""){
                term = "I Saw the Sign";
            }
            spotifySongData(term);
            break;
        case "movie-this":
            if (term === "") {
                term = "Mr. Nobody";
            }
            movieData(term);
            break;
        case "do-what-it-says":
            processFile();
            break;
        default:
            console.log("Unsupported command!");
            break;
    }
}


processCommand(command, term);


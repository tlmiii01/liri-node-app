// Code to create the Spotify environment variables
var dotenv = require("dotenv").config();
if (dotenv.error) {
    throw dotenv.error
}

// Importing the keys for Spotify
var keys = require("./keys.js");
console.log(keys.spotify);

// Importing rwquest 
var request = require("request");

// Function to process the Bands in Town request
function processBandsInTown () {
    let artist = process.argv[3];
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // Get the data from Bands In Town
    let bandInfo = request( queryURL, (error, response, body) => {
        console.log("Into the function");
        if(!error && response.statusCode === 200) {
            // console.log(JSON.parse(body)[0].venue);
            let parsedData = JSON.parse(body);
            // for( event in parsedData) {
            //     console.log(event);
            // }
            console.log(parsedData[0].venue);
            console.log(parsedData.length);
            parsedData.forEach((element) => {
                console.log(element.venue);
            })
        }

        // console.log(error);
        // console.log(response.statusCode);
        // console.log(body);
    }); 


}


// Switch statement to arse the arguments
switch (process.argv[2]) {
    case "concert-this":
        processBandsInTown();
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



// Importing rwquest 
var request = require("request");
var moment = require("moment");

// Function to process the Bands in Town request
function processBandsInTown(artist) {
    // let artist = process.argv[3];
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // Get the data from Bands In Town
    let bandInfo = request(queryURL, (error, response, body) => {
        // console.log("Into the function");
        if (!error && response.statusCode === 200) {
            // Make the data a regular JSON object
            let parsedData = JSON.parse(body);
            for( let event = 0; event < parsedData.length; ++event) {
                // console.log();
                console.log(parsedData[event].venue.name);
    
                let location = parsedData[event].venue.city + ", ";
                if (parsedData[event].venue.region != "") {
                    location += parsedData[event].venue.region + ", ";
                }
                location += parsedData[event].venue.country;
    
                console.log(location);
                // console.log(parsedData[event].datetime);
                console.log(moment(parsedData[event].datetime).format("MM/DD/YYYY"));
                console.log("\n");
            }

            
        };
    });

}
module.exports = processBandsInTown;
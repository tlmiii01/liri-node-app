var request = require("request");

function processOMDB(movie) {
    let queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
    request(queryUrl, (err, response, body) => {
        if(!err && response.statusCode === 200) {
           let movieData = JSON.parse(body);
        //    console.log(movieData);
           console.log("***************************************************************************");
           console.log("Movie Data:");
           console.log("Title: " + movieData.Title);
           console.log("Tear: " + movieData.Year);
           console.log("IMDB Rating: " + movieData.Ratings[0].Value);
           console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
           console.log("Country produced: " + movieData.Country);
           console.log("Language(s): " + movieData.Language);
           console.log("Plot: " + movieData.Plot);
           console.log("Actors: " + movieData.Actors);
           console.log("***************************************************************************");
        } else {
            
            console.log(err);
        }
    });
}

module.exports = processOMDB;
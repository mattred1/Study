console.log("CONNECTED");

// object "movies" contains keys "title"(string), "hasWatched"(boolean), and "rating"(numerical)
var movies = [
    {title: "A Goofy Movie",
    hasWatched: true,
    rating: 5},

    {title: "Artemis Fowl",
    hasWatched: false,
    rating: 3},

    {title: "Return of the King",
    hasWatched: true,
    rating: 5}
]

//runs forEach loop on movies object. Create var to hold sentence we're concatenating together. If hasWatched is true, return "seen", otherwise, return "not seen." Add to that the name of the movie title in quotes, which we add in by escaping them with /". Follows up by adding - and the key rating, then stars. Lastly, logs result
movies.forEach(function(movie) {
   var result = "You have ";
   if (movie.hasWatched) {
       result += "seen ";
   }
   else {
       result += "not seen ";
   }
    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
    console.log(result);
});







// Refactored version - cleans up by putting everything into a function and then calls function. buildString will run each movie. line 52 will be replaced by whatever result for a given movie
// Creating function
/*
function buildString(movie) {
   var result = "You have ";
   if (movie.hasWatched) {
       result += "seen ";
   }
   else {
       result += "not seen ";
   }
    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
   return result;
};

// Calling function
movies.forEach (function(movie) {
    console.log(builtString(movie));
});
*/
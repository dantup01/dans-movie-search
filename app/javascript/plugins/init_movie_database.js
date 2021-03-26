const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json&type=movie",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "ENV['MOVIE_API_KEY']",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
  }
};

const initMovieSearch = () => {
    $.ajax(settings).done(function (response) {
    console.log(response);
  });
};

export { initMovieSearch };

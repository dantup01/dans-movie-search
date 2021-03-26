const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json&type=movie",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "619337f078mshed2d243c4e9b731p11075cjsn0b86c23e66da",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
  }
};

const initMovieSearch = () => {
    $.ajax(settings).done(function (response) {
    console.log(response);
  });
};

export { initMovieSearch };

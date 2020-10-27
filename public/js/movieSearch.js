$(document).ready(function () {
  // Global variable
  let addMovie;
  let imdbID;

  // User info
  let userID;
  $.get("/api/account_data").then(function (data) {
    userID = data.id;
    $(".username").text(data.username);
  });

  // Display movie to the webpage
  function displayMovieInfo(event) {
    event.preventDefault();
    let movie = $("#movie-input").val().trim();
    $("#allMovies").empty();

    // Check if a movie was entered
    if (!movie) {
      return;
    }

    // Call information for imdb
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://rapidapi.p.rapidapi.com/title/auto-complete?q=" + movie,
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "6e6fa9c971msh4677fc2f963da2bp1a17d0jsnd8227d6ede33",
      },
    };

    $.ajax(settings).then(function (response) {
      for (let i = 0; i < response.d.length; i++) {
        let movie = response.d[i];

        // Show movies that are only by title
        if (movie.id.includes("tt")) {
          movieCard(movie);
        }
      }
    });
  }

  function hideMovie(movieID) {
    if (!$(`#${movieID}`)[0].className.includes("hidden")) {
      $(`#${movieID}`).addClass("hidden");
    }
  }

  // Add movie to database
  $("body").on("click", "#add-movie", function submitMovie() {
    imdbID = $(this).parent()[0].id;

    hideMovie(imdbID);

    // URL for OMDB
    const queryURL = "https://www.omdbapi.com/?i=" + imdbID + "&apikey=trilogy";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (res) {
      // Movie object for the database
      addMovie = {
        title: res.Title,
        poster: res.Poster,
        genre: res.Genre,
        actor: res.Actors,
        plot: res.Plot,
        runtime: res.Runtime,
        metaCritic: res.Metascore,
        imdb: res.imdbRating,
        AccountId: userID,
      };
      $.post("/api/movie/", addMovie);
    });
  });

  // Discard Movie
  $("body").on("click", "#discard-movie", function discardMovie() {
    imdbID = $(this).parent()[0].id;

    hideMovie(imdbID);
  });

  $("#show-movie").on("click", displayMovieInfo);
});

// Create card for a movie
function movieCard(result) {
  $("#allMovies").append(
    $("<div>").attr({
      class: "card movieCards",
      id: `${result.id}`,
      style: "width: 20rem",
    })
  );

  let image = $("<img>").attr({
    src: result.i.imageUrl,
    class: "card-img-top img-fluid",
    id: `moviePoster-${result.rank}`,
  });

  let title = $("<h5>")
    .attr({
      class: "card-title",
      id: `movieTitle-${result.rank}`,
    })
    .text(result.l);

  let actors = $("<h5>")
    .attr({
      class: "card-text",
      id: `movieActors-${result.rank}`,
    })
    .text(result.s);

  let year = $("<h5>")
    .attr({
      class: "card-text",
      id: `movieYear-${result.rank}`,
    })
    .text("Release Date: " + result.y);

  let dislike = $("<button>")
    .attr({
      class: "btn btn-default my-2 my-sm-0",
      id: "discard-movie",
    })
    .text("Dislike");

  let like = $("<button>")
    .attr({
      role: "button",
      class: "btn btn-default my-2 my-sm-0",
      id: "add-movie",
    })
    .text("Like");

  $(`#${result.id}`).append(image, title, actors, year, dislike, like);
}

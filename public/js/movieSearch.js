$(document).ready(function () {
  // Global variable
  let addMovie;

  // Display movie to the webpage
  function displayMovieInfo(event) {
    event.preventDefault();
    let movie = $("#movie-input").val().trim();
    const queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=a9df4696";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (res) {
      // console.log(res);

      movieCard(res);

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
      };
    });
  }

  // Add object to database
  function submitMovie() {
    $.post("/api/movie/", addMovie);
  }

  // Button listeners
  $("#add-movie").on("click", submitMovie);
  $("#show-movie").on("click", displayMovieInfo);
});

function movieCard(result) {
  $("#movie-tp").empty();
  $("#movie-RGAR").empty();
  $(".hidden").removeClass("hidden");

  $("#movie-tp").prepend(
    $("<img>").attr({
      src: result.Poster,
      class: "card-img-top",
      id: "movie-poster",
    })
  );

  let title = $("<h5>")
    .attr({
      class: "card-title",
      id: "movie-title",
    })
    .text(result.Title);

  let plot = $("<p>")
    .attr({
      class: "card-text",
      id: "movie-plot",
    })
    .text(result.Plot);

  let rating = $("<li>")
    .attr({
      class: "list-group-item",
      id: "movie-rating",
    })
    .text(result.imdbRating);

  let genre = $("<li>")
    .attr({
      class: "list-group-item",
      id: "movie-genre",
    })
    .text(result.Genre);

  let actor = $("<li>")
    .attr({
      class: "list-group-item",
      id: "movie-actor",
    })
    .text(result.Actors);

  let runTime = $("<li>")
    .attr({
      class: "list-group-item",
      id: "movie-runtime",
    })
    .text(result.Runtime);

  $("#movie-tp").append(title, plot);
  $("#movie-RGAR").append(rating, genre, actor, runTime);
}

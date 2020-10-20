function displayMovieInfo() {
  // var movie = $(this).attr("data-name");
  let movie = $("#movie-input").val().trim();
  const queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Create holding variable
  // let results;

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);

    let addMovie = {
      title: res.Title,
      poster: res.Poster,
      genre: res.Genre,
      actor: res.Actors,
      runtime: res.Runtime,
      metaCritic: res.Metascore,
      imdb: res.imdbRating,
    };

    submitMovie(addMovie);
  });
}

function submitMovie(movie) {
  $.post("/api/movie/", movie);
}
// $("#add-movie").on("click", function (event) {
//   event.preventDefault();
//   // This line grabs the input from the textbox
//   let movie = $("#movie-input").val().trim();
//   console.log(movie);

//   // // Adding movie from the textbox to our array
//   // movies.push(movie);
// });

$(document).on("click", "#add-movie", displayMovieInfo);

// $(document).ready(function () {
//   function getMovieInto() {}

//   // Delete button
//   // Need to update .delete-id and data id
//   $(".delete-id").on("click", function (event) {
//     let id = $(this).data("id");

//     $.ajax("/api/account/" + id, {
//       type: "Delete",
//     }).then(function () {
//       location.reload();
//     });
//   });
// });

function displayMovieInfo() {

  // var movie = $(this).attr("data-name");
  var movie = $("#movie-input").val().trim();
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
      console.log(response);

  
  });

}


$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#movie-input").val().trim();
  console.log(movie);

  // // Adding movie from the textbox to our array
  // movies.push(movie);
 
 
});

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









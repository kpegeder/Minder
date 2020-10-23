$(document).ready(function () {
  $("#my-movies").on("click", function movies() {
    $.get("/api/movie/", function (data, status) {
      console.log(data);
      console.log(status);
    });
  });
});

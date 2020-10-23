$(document).ready(function () {
  $.get("/api/account_data").then(function (data) {
    console.log("hi");
    console.log(data);
  });
  $("#my-movies").on("click", function movies() {
    $.get(
      "/api/movie/"
      // , function (data, status) {
      //   console.log(data);
      //   console.log(status);
      // }
    );
  });
});

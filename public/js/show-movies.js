$(document).ready(function () {
  let userID;
  $.get("/api/account_data").then(function (data) {
    userID = data.id;
    $(".username").text(data.username);
  });

  // $("#my-movies").on("click", function movies() {
  //   $.get(
  //     "/api/movie/"
  //     // , function (data, status) {
  //     //   console.log(data);
  //     //   console.log(status);
  //     // }
  //   );
  // });
});

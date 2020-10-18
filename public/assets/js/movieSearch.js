$(document).ready(function () {
  function getMovieInto() {}

  // Delete button
  // Need to update .delete-id and data id
  $(".delete-id").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("/api/account/" + id, {
      type: "Delete",
    }).then(function () {
      location.reload();
    });
  });
});

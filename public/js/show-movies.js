$(document).ready(function () {
  // Global Variables
  let acctSelect = $("#accounts");
  let compareAcct = {};
  let idMovies = [];

  // User info
  let userID;
  $.get("/api/account_data").then(function (data) {
    userID = data.id;
    compareAcct.userID = userID;
    $(".username").text(data.username);
  });

  // Liked movies id
  $.get("/api/compare").then(function (data) {
    for (let i = 0; i < data.length; i++) {
      idMovies.push(data[i].id);
    }
  });

  getAccounts();

  // Get account holders
  function getAccounts() {
    $.get("/api/account", renderAcctList);
  }

  // Render list of accounts
  function renderAcctList(data) {
    let rowsToAdd = [];

    for (let i = 0; i < data.length; i++) {
      if (userID != data[i].id) {
        rowsToAdd.push(createAcctRow(data[i]));
      }
    }
    acctSelect.empty();
    acctSelect.append(rowsToAdd);
  }

  // Creates the author options in the dropdown
  function createAcctRow(account) {
    let listOption = $("<option>");
    listOption.attr("value", account.id);
    listOption.text(account.username);
    return listOption;
  }

  // Display movies or hide movies
  $("#my-movies").on("click", function showMovies() {
    for (let i = 0; i < idMovies.length; i++) {
      if ($(`#movieID-${idMovies[i]}`)[0].className.includes("hidden"))
        $(`#movieID-${idMovies[i]}`).removeClass("hidden");
    }

    if ($("#movie-list")[0].className.includes("hidden")) {
      $("#movie-list").removeClass("hidden");
    } else {
      $("#movie-list").addClass("hidden");
    }
  });

  $("#compare").on("click", function () {
    compareAcct.friendID = parseInt($("#accounts").val());
    let movieList = [];
    let sharedMovies = [];

    $.get("/api/compareAll", compareAcct).then(function (results) {
      if (userID == results[0].AccountId) {
        movieList = reverseArray(results);
      } else {
        movieList = results;
      }

      let count = {};

      for (let i = 0; i < movieList.length; i++) {
        if (!count[movieList[i].title]) {
          count[movieList[i].title] = 1;
        } else {
          count[movieList[i].title] += 1;
        }

        if (count[movieList[i].title] == 2) {
          sharedMovies.push(movieList[i].id);
        }
      }

      // Show only movies in common
      $("#movie-list").removeClass("hidden");
      for (let j = 0; j < idMovies.length; j++) {
        if (!sharedMovies.includes(idMovies[j])) {
          $(`#movieID-${idMovies[j]}`).addClass("hidden");
        }
      }
    });
  });
});

function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

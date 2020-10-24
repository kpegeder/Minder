$(document).ready(function () {
  // jQuery references
  let acctSelect = $("#accounts");

  // User info
  let userID;
  $.get("/api/account_data").then(function (data) {
    userID = data.id;
    $(".username").text(data.username);
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
      rowsToAdd.push(createAcctRow(data[i]));
    }
    console.log(rowsToAdd);
    acctSelect.empty();
    acctSelect.append(rowsToAdd);
  }

  // Creates the author options in the dropdown
  function createAcctRow(account) {
    console.log();
    let listOption = $("<option>");
    listOption.attr("value", account.id);
    listOption.text(account.username);
    return listOption;
  }
  // $("#my-movies").on("click", function movies() {
  //   $.get(
  //     "/api/movie/"
  //     // , function (data, status) {
  //     //   console.log(data);
  //     //   console.log(status);
  //     // }
  //   );
  // });

  $("#compare").on("click", function () {
    console.log($("#accounts").val());
  });
});

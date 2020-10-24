$(document).ready(function () {
  let username = $("#username");
  let email = $("#email");
  let password = $("#password");

  $("#signup").on("click", handleUserInfo);

  function handleUserInfo(event) {
    event.preventDefault();

    let user = {
      username: username.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
    };
    if (!user.username || !user.email || !user.password) {
      return;
    }

    createUser(user);

    username.val("");
    email.val("");
    password.val("");
  }

  function createUser(user) {
    $.post("/api/signup", user)
      .then(function (data) {
        window.location.replace("/profile");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

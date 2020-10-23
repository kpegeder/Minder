$(document).ready(function () {
  let username = $("#username");
  let email = $("#email");
  let password = $("#password");

  function handleUserInfo() {
    if (
      !username.val().trim() ||
      !email.val().trim() ||
      !password.val().trim()
    ) {
      return;
    }

    createUser({
      username: username.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
    });
  }

  function createUser(user) {
    $.post("/api/account", user, function () {
      window.location.href("/homepage");
    });
  }

  $("#signup").on("click", handleUserInfo);
});

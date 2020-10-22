$(document).ready(function () {
  let firstName = $("#firstName");
  let lastName = $("#lastName");
  let email = $("#email");
  let password = $("#password");

  function handleUserInfo() {
    if (
      !firstName.val().trim() ||
      !lastName.val().trim() ||
      !email.val().trim() ||
      !password.val().trim()
    ) {
      return;
    }

    createUser({
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
    });
  }

  function createUser(user) {
    $.post("/api/account", user, function () {
      window.location.href = "/";
    });
  }

  $("#signup").on("click", handleUserInfo);
});

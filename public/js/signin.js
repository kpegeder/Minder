$(document).ready(function () {
  const emailInput = $("#login-email");
  const passwordInput = $("#login-pw");

  $("#signin").on("click", login);

  function login(event) {
    event.preventDefault();

    let user = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!user.email || !user.password) {
      return;
    }

    loginUser(user);

    emailInput.val("");
    passwordInput.val("");
  }

  function loginUser(user) {
    $.post("/api/login", user)
      .then(function () {
        window.location.replace("/profile");
      })
      .catch(function (err) {
        console.error(err);
      });
  }
});

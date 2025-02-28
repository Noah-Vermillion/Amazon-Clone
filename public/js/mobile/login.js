function userClicked() {
  $.post("/login", {
    username: $("#username").val(),
    password: $("#psw").val()
  }, function(data) {
    window.location = data.redirect;
  });

  return false;
}

function signupClicked() {
  window.location = "signup";
}

$(document).ready(function() {

  $("#username").keydown(function(event) {
    if (event.which === 13) {
      userClicked();
      event.preventDefault();
      return false;
    }
  });

  $("#psw").keydown(function(event) {
    if (event.which === 13) {
      userClicked();
      event.preventDefault();
      return false;
    }
  });

  $("#login").on('click touchstart', userClicked);
});

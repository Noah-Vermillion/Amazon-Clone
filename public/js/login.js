if (isMobileDevice()) {
  window.location.href = window.location + "/mobile";
}
<<<<<<< HEAD

=======
>>>>>>> ebd87bafb0dba71a53cbc986e5f3553b36f1ae52
function userClicked() {
  $.post("/login", {
    username: $("#username").val(),
    password: $("#psw").val()
  }, function(data) {
    if (isMobileDevice()) {
      window.location = "/";
    } else {
      window.location = data.redirect;
    }
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

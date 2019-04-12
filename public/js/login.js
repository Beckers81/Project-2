$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // Validate form has email and password
  loginForm.on("submit", function(event) {
    event.preventDeafult();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // LoginUser does a post to our api/login route and redirects us to the home page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
        // Log error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

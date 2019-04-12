console.log("survey.js");

var currentURL = window.location.origin;
// Capture the form inputs
$("#submit").on("click", function(event) {
  event.preventDefault();
  console.log("submit button");
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    $(".chosen-select").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (validateForm()) {
    // Create an object for the user's data
    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
    // AJAX post the data to the courses API.
    $.post(currentURL + "/api/courses", userData, function(data) {
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#matchName").text(data.name);
      $("#matchImg").attr("src", data.photo);
      // Show the modal with the best match
      $("#resultsModal").modal("toggle");
      // clear the input fields in the form
      $("#name").val("");
      $("#photo").val("");
    });

    $("#closeModal").click(function() {
      $.get("/", function(req, res) {
        location.replace(res);
      });
    });
  } else {
    $("#missingModal").modal("toggle");
  }
});

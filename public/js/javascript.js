$("#submit").on("click", function(event) {
  // $("#bestFriendModal").modal()
  console.log("Submit button was clicked");
  event.preventDefault();

  var userInput = {
    scores: [
      $("#q1")
        .val()
        .trim(),
      $("#q2")
        .val()
        .trim(),
      $("#q3")
        .val()
        .trim(),
      $("#q4")
        .val()
        .trim(),
      $("#q5")
        .val()
        .trim(),
      $("#q6")
        .val()
        .trim(),
      $("#q7")
        .val()
        .trim(),
      $("#q8")
        .val()
        .trim(),
      $("#q9")
        .val()
        .trim(),
      $("#q10")
        .val()
        .trim()
    ]
  };
  console.log(userInput);

  // var currentURL = window.location.origin;

  $.ajax({
    method: "POST",
    url: currentURL + "/api/answers",
    data: userInput
  }).then(function(matchedSchool) {
    console.log(matchedSchool);
    if (matchedSchool.found) {
      $("#schoolName").text(matchedSchool.name);
      $("#resultsModal").modal("show");
    }
  });
});

// $.post(currentURL + '/api/schools', userInput, function(data) {

//   $("#bestFriend").text(data.name);

//   $("#bestFriendPhoto").attr("src", data.photo);

//   $("#bestFriendModal").modal();

// });

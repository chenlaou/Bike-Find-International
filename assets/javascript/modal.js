$(document).ready(function() {
  var buttonPressed;

  $("#search").click(function() {
    console.log("hey");
    buttonPressed = true;
    validate();
  });

  function validate() {
    var somethingTyped = document.getElementById("user-input").value;
    if (!somethingTyped && buttonPressed === true) {
      console.log("Modal happens");
      $("#myModal").modal();
      console.log(somethingTyped);
    } else {
      window.location.replace("index2.html");
    }
  }
});

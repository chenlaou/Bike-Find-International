$(document).ready(function(){
  // firebase database setup
  var config = {
    apiKey: "AIzaSyAM1poplPY_SUqYYanI-ZwgAqrK0z_YnSM",
      authDomain: "bike-find-international.firebaseapp.com",
      databaseURL: "https://bike-find-international.firebaseio.com",
      projectId: "bike-find-international",
      storageBucket: "bike-find-international.appspot.com",
      messagingSenderId: "556431147211"
  };

  firebase.initializeApp(config);

  // A variable to reference the database.
  var database = firebase.database();

  // Pushes user input into firebase
  $("#search-link1").on("click", function() {
    var location = $("#user-input").val().trim();

    var newSearch = {
      location: location,
    }

    database.ref().set(newSearch);
  });

  // Clicks on current location when user opts to use current location button on index1
if (window.location.search.includes("use_location=true")) {
  setTimeout(function() {
    $("button.mapboxgl-ctrl-geolocate").click()
  });
}
});
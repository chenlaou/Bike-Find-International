var queryURL = "http://api.citybik.es/v2/networks";
function ajaxCall () {

// ajax call to citybike api
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
}

// calling the ajaxCall function
ajaxCall()

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

var location;

$("#search").on("click", function() {
  event.preventDefault();
  // Storing and retreiving location data
  location = $("#user-input").val().trim();
  
  // Pushing to database
  database.ref().push({
      location: location,
  });
  $("form")[0].reset();
});
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

var location;

$("#search2").on("click", function() {
  event.preventDefault();
  // Storing and retreiving location data
  location = $("#user-input").val().trim();
  console.log(location)
  var newSearch = {
    location: location,
  }
  console.log(newSearch)
  // Pushing to database
  database.ref().set(newSearch)
});

// CITYBIKE API
var queryURL = "http://api.citybik.es/v2/networks";
function ajaxCall() {

  // // ajax call to citybike api
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function (response) {
  //   console.log(response);
  // });
}

    // The createRow function takes data returned by BIKEAPI and appends the table data to the tbody
    var createRow = function(data) {
      // Create a new table row element
      var tRow = $("<tr>");
    
      var cityTd = $("<td>").text(networks.city);
      var countryTd = $("<td>").text(networks.country);
      var companyTd = $("<td>").text(data.company);

         // Append the newly created table data to the table row
         tRow.append(cityTd, countryTd, companyTd);
         // Append the table row to the table body
         $("tbody").append(tRow);
       };

           // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
    var searchBikes = function(movie) {
      var queryURL = "http://api.citybik.es/v2/networks";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      });
    }; 
  });

  searchBikes("New York");


// // calling the ajaxCall function
// ajaxCall()
// })
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

database.ref().on("value", function(snapshot) {
  // calling the ajaxCall function
  ajaxCall(snapshot.val().location);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

// CITYBIKE API
var queryURL = "http://api.citybik.es/v2/networks";

function ajaxCall(location) {

  // ajax call to citybike api
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.networks);
    var map;

    // Clicks on current location when user opts to use current location button on index1
    if (window.location.search.includes("use_location=true")) {
      setTimeout(function() {
        $("button.mapboxgl-ctrl-geolocate").click()
      });

      map = new mapboxgl.Map({
        container: "mapContainer", // container id
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40], // starting position
        zoom: 9 // starting zoom
      }); 
    }
    else {
        var filteredLocation = response.networks.find(function(network) {
          if(network.location.city === location) {
            return true
          }
          else {
            return false;
          }
        });
        
        map = new mapboxgl.Map({
          container: "mapContainer", // container id
          style: "mapbox://styles/mapbox/streets-v11",
          center: [filteredLocation.location.longitude, filteredLocation.location.latitude], // starting position
          zoom: 9 // starting zoom
        });
        $(".city").text(filteredLocation.location.city)
        $(".country").text(filteredLocation.location.country)
        $(".company").text(filteredLocation.company)
      }
      console.log(filteredLocation)

      // $(".city").text(filteredLocation.location.city)
      // $(".country").text(filteredLocation.location.country)
      // $(".company").text(filteredLocation.company)

     // Add SEARCH/GEOCODER FUNCTION
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken
        })
      );
      
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());
      
      //  ADDS CONTROL TO FIND THE USE'S LOCATION
      map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
      );
    });
  }
});
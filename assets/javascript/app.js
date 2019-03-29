// var queryURL = "https://feeds.citibikenyc.com/stations/stations.json";
// var queryURL = "https://proxy.streamdata.io/https://feeds.citibikenyc.com/stations/stations.json";
var queryURL = "http://api.citybik.es/v2/networks";
function ajaxCall () {


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
}

ajaxCall()
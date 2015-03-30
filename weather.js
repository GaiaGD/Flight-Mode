var currentWeather = "London,uk"
var APPID = APIKEY;

$.ajax ({
// url: "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=50cba9366f1541a95876463e9885c334",
url: "https://openweathermap.org/data/2.5/weather?q=" + currentWeather + "&APPID=50cba9366f1541a95876463e9885c334"
type: "GET",
dataType: 'json',
success: function(data) {
console.log(data)
uponSuccess(data)
},
    error: function(response) {  
      console.log(response)
    }
});
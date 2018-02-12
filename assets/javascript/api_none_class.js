var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  $("#tempunit").click(function () {
    changeTempUnit();
  });
  
})

function changeTempUnit() {
  var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
}

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  // alert(urlString);
  $.ajax({
    url: urlString,
    beforeSend: function () {
      $(".loading_image").show();
    },
    success: function (result) {
      $(".loading_image").hide();
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      // Converts Celcius to Fahrenheit
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      var fahTemp = Math.round(currentTempInCelsius * 9 / 5 + 32);
      tempUnit = "F";
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      var weather = result.weather[0].main;
      // alert(weather);
      changeBackgroundImage(weather);
      $("#fadebg").css('opacity', '0');
      $("#desc").text(weather);
      IconGen(weather);
    }
  });
}

function changeBackgroundImage(weather) {
  // var weather = "Thunderstorm";
  switch(weather) {
    case "Drizzle":
    case "Rain":
        $('body').addClass("rain_bg")
        break;
    case "Cloudy":
        $('body').addClass("cloudy_bg")
        break;
    case "Mist":
        $('body').addClass("mist_bg")
        break;
    case "Clear":
        $('body').addClass("clear_bg")
        break;
    case "Thunderstorm":
        $('body').addClass("thunderstorm_bg")
        break;
    case "Snow":
        $('body').addClass("snow_bg")
        break;
  }
}

function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      addIcon(desc)
      break;
    case 'clouds':
      addIcon(desc)
      break;
    case 'rain':
      addIcon(desc)
      break;
    case 'snow':
      addIcon(desc)
      break;
    case 'clear':
      addIcon(desc)
      break;
    case 'thunderstom':
      addIcon(desc)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}


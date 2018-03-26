// Weather Class //

function weatherAPI() {
  this.api = "https://api.openweathermap.org/data/2.5/weather?id=5389489&units=metric&APPID=38d5ef996012a212335784b0f794fdff";
  this.tempUnit = 'C';
  this.currentTempInCelsius = null;

  // Setter function to keep the current temperature in the class instance //
  this.setCurrentTempInCelsius = function setCurrentTempInCelsius (temp) {
    this.currentTempInCelsius = temp;
  }

  // Function to change the temperature unit better celcius and fahrenheit //
  this.changeTempUnit = function changeTempUnit () {
    var me = this;
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "F") {
      var currentTempInFahrenheit = Math.round(me.currentTempInCelsius * 9 / 5 + 32);
      $("#temp").text(currentTempInFahrenheit + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(me.currentTempInCelsius + " " + String.fromCharCode(176));
    }
  }

  // Grabs the weather information from the API //
  this.getWeather = function getWeather () {
      var me = this;
      // var urlString = this.api + this.lat + "&" + this.lon;
      $.ajax({
        url: this.api,
        beforeSend: function () {
          $(".loading_image").show();
        },
        timeout: 10000,
        success: function (result) {
          console.log(result);
          var weather = result.weather[0].main;
          me.changeBackgroundImage(weather);
          setTimeout(function(){
            $(".loading_image").hide();
            $("#city").text(result.name + ", ");
            $("#country").text(result.sys.country);
            me.setCurrentTempInCelsius(Math.round(result.main.temp * 10) / 10);
            $("#temp").text(me.currentTempInCelsius + " " + String.fromCharCode(176));
            $("#tempunit").text(me.tempUnit);
            // Converts Celcius to Fahrenheit
            me.changeTempUnit();
            $("#fadebg").css('opacity', '0');
            $("#desc").text(weather);
            me.IconGen(weather); 
          }, 1000);
        },
        error: function (jqXhr, textStatus, errorMessage) { // error callback 
          if (textStatus == "timeout") {
            alert("Your request has timed out.  Please try again later or check your geolocation settings.")
          }
        }
      });
    }

  //  Changes the background to match whatever the weather is currently //
  this.changeBackgroundImage = function changeBackgroundImage (weather) {
    // var weather = "Thunderstorm";
    switch(weather) {
      case "Drizzle":
      case "Rain":
          $('body').addClass("rain_bg")
          break;
      case "Cloudy":
      case "Clouds":
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

  //  Grabs icons to display depending on the weather info grabbed //
  this.IconGen = function IconGen (desc) {
    var desc = desc.toLowerCase();
    var me = this;
    switch (desc) {
      case 'drizzle':
        me.addIcon(desc)
        break;
      case 'clouds':
        me.addIcon(desc)
        break;
      case 'rain':
        me.addIcon(desc)
        break;
      case 'snow':
        me.addIcon(desc)
        break;
      case 'clear':
        me.addIcon(desc)
        break;
      default:
        $('div.clouds').removeClass('hide');
    }
  }

  // Unhides the appropriate div to show the icon //
  this.addIcon = function addIcon (desc) {
    $('div.' + desc).removeClass('hide');
  }

}

$( document ).ready(function() {

  var weather = new weatherAPI();
  weather.getWeather();

  $("#tempunit").click(function () {
    weather.changeTempUnit();
  });
  
})
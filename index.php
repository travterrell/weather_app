<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>What's Your Weather?</title>
    <link rel="icon" type="image/png" href="assets/images/titleicon.png">
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="assets/css/styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>

	  <div class="container">

      <div class="row">
        <div id="fadebg"></div>

        <header class="col-xs-12 text-center">
          <h1>What's Your Weather?</h1>
        </header>

        <div class="col-xs-8 col-xs-offset-2">

      <div class="text-center loading_image">
        <svg width="300px"  height="300px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring" style="background: none;"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="20" stroke-width="4" stroke="#FFFFFF" stroke-dasharray="31.41592653589793 31.41592653589793" transform="rotate(141 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animateTransform></circle><circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="15" stroke-width="4" stroke="#FFFFFF" stroke-dasharray="23.561944901923447 23.561944901923447" stroke-dashoffset="23.561944901923447" transform="rotate(-141 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite" text-shadow="5px 5px black"></animateTransform></circle></svg>
      </div>

      <div class="text-center status">
        <p><span id="city"></span> <span id="country"></span></p>
        <p><span id="temp"></span><span class="temp" id="tempunit" ></span></p>
        <p id="desc"></p>
      </div>

      <div class="text-center all-icon">
        <div class="icon sun-shower hide ">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
          <div class="rain"></div>
        </div>
        <div class="icon thunder-storm hide thunderstom">
          <div class="cloud"></div>
          <div class="lightning">
            <div class="bolt"></div>
            <div class="bolt"></div>
          </div>
        </div>
        <div class="icon cloudy hide clouds">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
        <div class="icon flurries hide snow">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
        <div class="icon sunny hide clear">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
        <div class="icon rainy hide rain">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      </div>

        </div>
      </div>
    </div>

    <script src="assets/javascript/animation.js"></script>
    <script src="assets/javascript/api.js"></script>
  </body>
</html>
// MODULE
// use the services "ngRoute","ngResource"
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

// ROUTES
weatherApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix(""); // Disable the "!" prefix
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "homeController",
    })
    .when("/forecast", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController",
    });
});
// SERVICES
weatherApp.service("cityService", function () {
  this.city = "chennai";
});

// CONTROLLERS
// inject the custom city service (no need for $)
weatherApp.controller("homeController", [
  "$scope",
  "$log",
  "cityService",
  function ($scope, $log, cityService) {
    $scope.city = cityService.city;
    // establish 2 way binding
    $scope.$watch("city", function () {
      cityService.city = $scope.city;
    });
  },
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$http",
  "cityService",
  function ($scope, $http, cityService) {
    $scope.city = cityService.city;
    // $scope.city = cityService.city || "London"; // Fallback city

    const apiKey = "dab0c1237c271094b8379df4181ffa50";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${$scope.city}&appid=${apiKey}&units=metric`;

    // Only make the API call if $scope.city is defined
    if ($scope.city) {
      // make api call
      $http.get(url).then(
        function (response) {
          console.log("response", response);
          $scope.weatherResult = response.data;
        },
        function (error) {
          console.error("Error:", error);
        }
      );
    } else {
      console.error("City name is undefined.");
    }
  },
]);

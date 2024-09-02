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

// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "$log",
  function ($scope, $log) {},
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$log",
  function ($scope, $log) {},
]);

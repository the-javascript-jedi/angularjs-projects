var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config([
  "$locationProvider",
  function ($locationProvider) {
    $locationProvider.hashPrefix(""); // Disable the "!" prefix
  },
]);
// configure router
myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })
    .when("/second/", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })
    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});

//127.0.0.1:5500/index.html#/
http: myApp.controller("mainController", [
  "$scope",
  function ($scope) {
    $scope.name = "Main";
  },
]);
//127.0.0.1:5500/index.html#/second/2
http: myApp.controller("secondController", [
  "$scope",
  "$routeParams",
  function ($scope, $routeParams) {
    console.log("routeParams", $routeParams);
    $scope.num = $routeParams.num || 1;
  },
]);

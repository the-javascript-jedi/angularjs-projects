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

// configure service
myApp.service("nameService", function () {
  var self = this;
  this.name = "John Doe";

  this.namelength = function () {
    return self.name.length;
  };
});

//127.0.0.1:5500/index.html#/
// inject the created name into controller
http: myApp.controller("mainController", [
  "$scope",
  "nameService",
  "$log",
  function ($scope, nameService, $log) {
    //initialize the name and load on page load
    $scope.name = nameService.name;
    // update value of name in service whenever name is updated in other pages
    $scope.$watch("name", function () {
      nameService.name = $scope.name;
    });
    $log.log("nameService.name", nameService.name);
    $log.log("nameService.namelength()", nameService.namelength());
  },
]);
//127.0.0.1:5500/index.html#/second/2
http: myApp.controller("secondController", [
  "$scope",
  "$routeParams",
  "nameService",
  function ($scope, $routeParams, nameService) {
    //initialize the name and load on page load
    $scope.name = nameService.name;
    // update value of name in service whenever name is updated in other pages
    $scope.$watch("name", function () {
      nameService.name = $scope.name;
    });
    console.log("routeParams", $routeParams);
    $scope.num = $routeParams.num || 1;
  },
]);

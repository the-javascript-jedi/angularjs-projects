var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })

    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    })

    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});

myApp.controller("mainController", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.person = {
      name: "John Doe Object",
      address: "555 Main St., New York, NY 11111 Object",
    };
  },
]);

// directive
myApp.directive("searchResult", function () {
  return {
    restrict: "AECM",
    templateUrl: "directives/searchresult.html",
    replace: true,
    scope: {
      // @ sign for text
      // personName: "@",
      // personAddress: "@",
      // equal sign for objects - it specifies 2 way binding - USE CAREFULLY -changes will affect the parent scope
      personObject: "=",
    },
  };
});

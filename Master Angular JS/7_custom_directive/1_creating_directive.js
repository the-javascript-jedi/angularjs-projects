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
    // display this single object in the html
    $scope.person = {
      name: "John Doe passing function",
      address: "555 Main St.",
      city: "New York",
      state: "NY",
      zip: "11111",
    };

    $scope.formattedAddress = function (person) {
      return (
        person.address +
        ", " +
        person.city +
        ", " +
        person.state +
        " " +
        person.zip
      );
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
      // = | specifies 2 way binding use carefully for objects
      personObject: "=",
      // & | specifies we are passing functions
      formattedAddressFunction: "&",
    },
  };
});

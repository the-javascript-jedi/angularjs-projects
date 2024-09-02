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
    // display this array of object in the html
    $scope.people = [
      {
        name: "John Doe",
        address: "555 Main St.",
        city: "New York",
        state: "NY",
        zip: "11111",
      },
      {
        name: "Jane Doe",
        address: "222 Second St.",
        city: "Buffalo",
        state: "NY",
        zip: "22222",
      },
      {
        name: "George Doe",
        address: "333 Main St.",
        city: "Miami",
        state: "FL",
        zip: "33333",
      },
    ];

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

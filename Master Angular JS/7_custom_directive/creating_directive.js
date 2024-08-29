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
  function ($scope, $log) {},
]);

myApp.controller("secondController", [
  "$scope",
  "$log",
  "$routeParams",
  function ($scope, $log, $routeParams) {},
]);

// directive
myApp.directive("searchResult", function () {
  return {
    // default is AE - specifies which directive should be used
    // do not use unless necessary
    restrict: "AECM", //A=Attribute|E= Element|C=Class|M=Comment
    // template:'<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
    templateUrl: "directives/searchresult.html",
    // by default replace is false
    // if we keep as true - that means wherever we see the directive completely replace it with what the template are
    replace: true,
  };
});

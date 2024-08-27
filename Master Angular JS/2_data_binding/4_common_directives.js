var myApp = angular.module("myApp", []);
console.log("loaded");
myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  function ($scope, $filter, $timeout) {
    $scope.name = "Nithin";
    $scope.alertClick = function () {
      alert("Clicked");
    };
  },
]);

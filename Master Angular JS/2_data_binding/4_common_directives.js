var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$timeout",
  function ($scope, $filter, $timeout) {
    $scope.handle = "";
    $scope.lowercasehandle = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.characters = 5;
    // specify rules
    $scope.rules = [
      { rulename: "Must be 5 characters" },
      { rulename: "Must not be used elsewhere" },
      { rulename: "Must be cool" },
    ];
    console.log("$scope.rules", $scope.rules);
  },
]);

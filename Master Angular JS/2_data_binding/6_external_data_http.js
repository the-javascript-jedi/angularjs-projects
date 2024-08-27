var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  "$http",
  function ($scope, $filter, $http) {
    // // GET request on page load
    // $http
    //   .get("/api")
    //   .success(function (result) {
    //     $scope.rules = result;
    //   })
    //   .error(function (data, status) {
    //     console.log(data);
    //   });

    // POST Request - adding a new rule on button click
    $scope.newRule = "";
    $scope.addRule = function () {
      $http
        .post("/api", { newRule: $scope.newRule })
        .success(function (result) {
          console.log(result);
          $scope.rules = result;
          $scope.newRule = "";
        })
        .error(function (data, status) {
          console.log(data);
        });
    };
  },
]);

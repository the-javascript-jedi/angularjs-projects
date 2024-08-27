var myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  "$scope",
  "$filter",
  function ($scope, $filter) {
    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function () {
      // wrap with apply for async function
      $scope.$apply(function () {
        // api request status check
        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
          $scope.rules = JSON.parse(rulesrequest.responseText);
        }
      });
    };
    // make api request
    rulesrequest.open("GET", "http://localhost:54765/api", true);
    rulesrequest.send();
  },
]);

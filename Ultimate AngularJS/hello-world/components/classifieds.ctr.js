(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function ($scope, $http) {
      // mock an api call
      $http.get("data/classifieds.json").then(function (data) {
        console.log("data", data);
        $scope.classifieds = data.data;
      });
    });
})();

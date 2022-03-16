(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function ($scope) {
      $scope.name = {
        first: "Nithin",
        last: "Samuel",
      };
    });
})();

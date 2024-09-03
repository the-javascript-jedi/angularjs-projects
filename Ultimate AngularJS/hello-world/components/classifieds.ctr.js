(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    // inject the classifieds factory
    .controller(
      "classifiedsCtrl",
      function ($scope, $http, classifiedsFactory) {
        $scope.message = "AngularJS";
        // mock an api call
        classifiedsFactory.getClassifieds().then(function (data) {
          console.log("data", data);
          $scope.classifieds = data.data;
        });
      }
    );
})();

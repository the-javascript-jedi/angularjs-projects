(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    // inject the classifieds factory
    .controller(
      "classifiedsCtrl",
      function ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {
        $scope.message = "AngularJS";
        // mock an api call
        classifiedsFactory.getClassifieds().then(function (data) {
          console.log("data", data);
          $scope.classifieds = data.data;
        });
        // dummy contact
        var contact = {
          name: "Ryan Chenkie",
          phone: "(555) 555 5555",
          email: "ryanchenkie@gmail.com",
        };

        // sidenav button open
        $scope.openSidebar = function () {
          $mdSidenav("left").open();
        };
        // sidenav close
        $scope.closeSidebar = function () {
          $mdSidenav("left").close();
        };
        // save form data
        $scope.saveClassified = function (classified) {
          if (classified) {
            // attach dummy contact to form data
            classified.contact = contact;
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSidebar();
            // show toast notification
            $mdToast.show(
              $mdToast
                .simple()
                .content("Classification Saved")
                .position("top, right")
                .hideDelay(3000)
            );
          }
        };
      }
    );
})();

(function () {
  "use strict";
  //   Inject scope into controller
  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function ($scope) {
      $scope.classified = {
        title: "First Item",
        price: "$1,000,000",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quod ut. Libero vero, praesentium recusandae voluptas magni soluta provident impedit!",
      };
    });
})();

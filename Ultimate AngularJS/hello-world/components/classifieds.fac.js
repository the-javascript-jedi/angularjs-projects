// factory
(function () {
  "use strict";
  angular
    .module("ngClassifieds")
    .factory("classifiedsFactory", function ($http) {
      // just return the http get request and handle the promise in controller
      function getClassifieds() {
        return $http.get("data/classifieds.json");
      }
      return {
        getClassifieds: getClassifieds,
      };
    });
})();

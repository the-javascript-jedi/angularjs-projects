// Module needed for angular to work
// Array contains reference to other module app depends on
// we pass ngMaterial as dependency and pass config values using .config
(function () {
  "use strict";

  angular
    .module("ngClassifieds", ["ngMaterial"])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider
        .theme("default")
        .primaryPalette("teal")
        .accentPalette("orange");
    });
})();

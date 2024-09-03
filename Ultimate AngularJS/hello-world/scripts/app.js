// Module needed for angular to work
// Array contains reference to other module app depends on
// we pass ngMaterial as dependency and pass config values using .config
(function () {
  "use strict";

  angular
    // pass the ngMaterial as providers - dependency injection
    // reference the library as a module
    .module("ngClassifieds", ["ngMaterial"])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider
        .theme("default")
        .primaryPalette("teal")
        .accentPalette("orange");
    })
    .directive("helloWorld", function () {
      return {
        template: "<h1> Hello World! {{message}}</h1>",
      };
    });
})();

(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScopeWithString", function () {
    return {
      // when we add this scope the shared data cannot be accessed from the directiveController
      scope: {
        name: "@",
      },
      template: "Name Isolate Scope String Directive:{{name}}",
    };
  });
})();

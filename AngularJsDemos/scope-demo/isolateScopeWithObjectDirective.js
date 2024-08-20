(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScopeWithObject", function () {
    return {
      // when we add this scope the shared data cannot be accessed from the directiveController
      scope: {
        datasource: "=",
      },
      template:
        "Name {{datasource.name}} Street: {{datasource.street}}" +
        "<br/><button ng-click='datasource.name=\"Fred\"'>Change</button>",
    };
  });
})();

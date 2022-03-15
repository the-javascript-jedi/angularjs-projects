(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScopeWithEvent", function () {
    return {
      // when we add this scope the shared data cannot be accessed from the directiveController
      scope: {
        datasource: "=",
        // Step 1: specify the action with "&"
        action: "&",
      },
      // Step 2: specify the action in the template
      template:
        "Name {{datasource.name}} Street: {{datasource.street}}" +
        "<br/><button ng-click='action()'>Change</button>",
    };
  });
})();

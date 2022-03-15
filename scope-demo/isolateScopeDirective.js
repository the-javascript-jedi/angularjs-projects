(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScope", function () {
    return {
      // when we add this scope the shared data cannot be accessed from the directiveController
      template:
        "<b>Isolate Scope</b> <br/> Name: {{customer.name}} Street: {{customer.street}}",
    };
  });
})();

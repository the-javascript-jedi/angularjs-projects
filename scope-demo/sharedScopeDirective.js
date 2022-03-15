(function () {
  var app = angular.module("directivesModule");

  app.directive("sharedScope", function () {
    return {
      template:
        "<b>Shared Scope</b><br/> Name: {{customer.name}} Street: {{customer.street}}",
    };
  });
})();

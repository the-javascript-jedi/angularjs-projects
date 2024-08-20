(function () {
  console.log("loadedd");
  var app = angular.module("directivesModule", []);
  //   display a template with output text hello world
  app.directive("helloWorld", function () {
    // directive definition object
    return {
      template: "Hello World",
    };
  });
})();

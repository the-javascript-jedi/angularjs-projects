// DIRECTIVES
weatherApp.directive("weatherReport", function () {
  return {
    restrict: "E",
    templateUrl: "directives/weatherReport.html",
    replace: true,
    // isolating the scope
    scope: {
      // 2 way binding
      weatherDay: "=",
      // passing functions - &
      convertToStandard: "&",
      convertToDate: "&",
      // string
      dateFormat: "@",
    },
  };
});

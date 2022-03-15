(function () {
  var linkDemo = function () {
    return {
      //  restrict: "A"- Attribute. the reason Not to be used as a tag, It must be able to attach it to anything and handle different types of events
      restrict: "A",
      link: function (scope, elem, attrs) {
        elem.on("click", function () {
          elem.html("You clicked me");
        });
        elem.on("mouseenter", function () {
          elem.css("background-color", "yellow");
        });
        elem.on("mouseleave", function () {
          elem.css("background-color", "white");
        });
      },
    };
  };
  // binding to the module
  angular.module("directivesModule", []).directive("linkDemo", linkDemo);
})();

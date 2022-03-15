(function () {
  console.log("loaded directives controller");
  var app = angular.module("directivesModule", []);

  var injectParams = ["$scope"];

  var CustomersController = function ($scope) {
    var counter = 0;
    $scope.tasks = [{ title: "Task 1" }];
    $scope.customer = {
      name: "David",
      street: "1234 Anywhers street",
    };
    $scope.customers = [
      {
        name: "David",
        street: "1234 Anywhere Street",
        age: 25,
        url: "index.html",
      },
      {
        name: "Tina",
        street: "1800 Cresr Street",
        age: 35,
        url: "index.html",
      },
      {
        name: "Michells",
        street: "4321 Anywhere Street",
        age: 25,
        url: "index.html",
      },
    ];

    // Add Customer
    $scope.addCustomer = function (name) {
      console.log(name);
      counter++;
      $scope.customers.push({
        name: name ? name : "New Customer" + counter,
        street: counter + "Cedar Point Street",
        age: counter,
      });
    };
    // Change Data
    $scope.changeData = function () {
      counter++;
      $scope.customer = {
        name: "James",
        street: counter + " Cedar Point St",
      };
    };
  };
  CustomersController.$inject = injectParams;
  // Controller
  app.controller("CustomersController", CustomersController);
})();

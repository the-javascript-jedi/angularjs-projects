//Option 1

// app.controller("CustomersController", function ($scope) {
//   $scope.sortBy = "name";
//   $scope.reverse = false;

//   $scope.customers = [
//     {
//       joined: "2000-12-02",
//       name: "John",
//       city: "Chandler",
//       orderTotal: 9.9956,
//     },
//     { joined: "1965-01-25", name: "Zed", city: "Las Vegas", orderTotal: 19.99 },
//     { joined: "1944-06-15", name: "Tina", city: "New York", orderTotal: 44.99 },
//     { joined: "1995-03-28", name: "Dave", city: "Seattle", orderTotal: 101.5 },
//   ];
//   $scope.doSort = function (propName) {
//     $scope.sortBy = propName;
//     $scope.reverse = !$scope.reverse;
//   };
// });

//Option 2

// (function () {
//   angular
//     .module("customersApp")
//     .controller("CustomersController", function ($scope) {
//       $scope.sortBy = "name";
//       $scope.reverse = false;

//       $scope.customers = [
//         {
//           joined: "2000-12-02",
//           name: "John",
//           city: "Chandler",
//           orderTotal: 9.9956,
//         },
//         {
//           joined: "1965-01-25",
//           name: "Zed",
//           city: "Las Vegas",
//           orderTotal: 19.99,
//         },
//         {
//           joined: "1944-06-15",
//           name: "Tina",
//           city: "New York",
//           orderTotal: 44.99,
//         },
//         {
//           joined: "1995-03-28",
//           name: "Dave",
//           city: "Seattle",
//           orderTotal: 101.5,
//         },
//       ];
//       $scope.doSort = function (propName) {
//         $scope.sortBy = propName;
//         $scope.reverse = !$scope.reverse;
//       };
//     });
// })();

//Option 3

(function () {
  var CustomersController = function ($scope) {
    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.customers = [
      {
        joined: "2000-12-02",
        name: "John",
        city: "Chandler",
        orderTotal: 9.9956,
      },
      {
        joined: "1965-01-25",
        name: "Zed",
        city: "Las Vegas",
        orderTotal: 19.99,
      },
      {
        joined: "1944-06-15",
        name: "Tina",
        city: "New York",
        orderTotal: 44.99,
      },
      {
        joined: "1995-03-28",
        name: "Dave",
        city: "Seattle",
        orderTotal: 101.5,
      },
    ];
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();

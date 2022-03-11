(function () {
  // Inject customersService service into the controller
  var CustomersController = function ($scope, customersService) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    // Initialize customers
    $scope.customers = [];

    function init() {
      $scope.customers = customersService.getCustomers();
    }
    // Call the init on load
    init();
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersService"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();

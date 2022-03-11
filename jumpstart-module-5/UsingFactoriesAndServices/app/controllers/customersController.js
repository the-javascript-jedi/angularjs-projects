(function () {
  // Inject customerFactory factory into the controller
  var CustomersController = function ($scope, customersFactory, appSettings) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    // Initialize customers
    $scope.customers = [];
    $scope.appSettings = appSettings;
    function init() {
      $scope.customers = customersFactory.getCustomers();
    }
    // Call the init on load
    init();
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "customersFactory"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();

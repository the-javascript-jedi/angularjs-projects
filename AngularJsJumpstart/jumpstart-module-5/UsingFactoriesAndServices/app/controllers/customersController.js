(function () {
  // Inject customerFactory factory into the controller
  var CustomersController = function (
    $scope,
    $log,
    customersFactory,
    appSettings
  ) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    // Initialize customers
    $scope.customers = [];
    $scope.appSettings = appSettings;
    function init() {
      // make api call using factory method
      // the call will return a promise and that can be accessed in success
      customersFactory.getCustomers().then(function (customers) {
        $scope.customers = customers.data;
      });
      // .error(function (data, status, headers, config) {
      //   // handle error
      //   $log.log(data.error);
      // });
    }
    // Call the init on load
    init();
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ["$scope", "$log", "customersFactory"];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();

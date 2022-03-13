(function () {
  var customersFactory = function ($http) {
    var factory = {};
    // expose the factory object
    //get customers from http request
    factory.getCustomers = function () {
      return $http.get("http://localhost:8080/customers");
    };
    //get single customer
    factory.getCustomer = function (customerId) {
      return $http.get("http://localhost:8080/customers/" + customerId);
    };

    return factory;
  };
  // Inject Dependencies
  customersFactory.$inject = ["$http"];

  angular.module("customersApp").factory("customersFactory", customersFactory);
})();
